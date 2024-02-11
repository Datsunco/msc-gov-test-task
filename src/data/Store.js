import { makeAutoObservable, observable } from "mobx";

export default class Store {
    skillsData = {}
    skillsDataArray = []
    profData = {}
    activeSkills = []
    activeProfs = []
    data = []

    constructor(data) {
        makeAutoObservable(this);
        this.data = data
    }

    setSkillsDataDefault() {
        let i = 0
        let skillsDataSet = new Set()
        let profDataAxis = {}

        this.data.forEach(element => {
            element.mainSkills.forEach(skill => {
                skillsDataSet.add(skill)
            })
            element.otherSkills.forEach(skill => {
                skillsDataSet.add(skill)
            })

            //Сохраняем в хранилище профессии с координатами 
            const angleStep = (2 * Math.PI) / this.data.length;

            const x = 125 + 125 * Math.cos(i * angleStep + Math.PI * 3 / 2);
            const y = 125 + 125 * Math.sin(i * angleStep + Math.PI * 3 / 2);
            profDataAxis[element.name] = { x, y }
            i += 1

        })
        this.setProfData(profDataAxis)
        //end


        let skillsData = []
        let skillsDataAxis = {}
        i = 0
        // Сохраняем в хранилище скилы с координатами 
        skillsDataSet.forEach((value, valueAgain, set) => {
            const angleStep = (2 * Math.PI) / skillsDataSet.size;

            const x = 300 + 300 * Math.cos(i * angleStep + Math.PI * 3 / 2);
            const y = 300 + 300 * Math.sin(i * angleStep + Math.PI * 3 / 2);

            i += 1
            skillsData.push({ name: value, x, y })
            skillsDataAxis[value] = { x, y }
        });
        this.setSkillsData(skillsDataAxis)
        this.setSkillsDataArray(skillsData)
    }


    setActiveSkills(skills) {
        this.activeSkills = skills
    }

    setActiveProf(profs) {
        this.activeProfs = [profs]
    }

    setSkillsData(skillsData) {
        this.skillsData = skillsData
    }

    setSkillsDataArray(skillsData) {
        this.skillsDataArray = skillsData
    }

    setProfData(profData) {
        this.profData = profData
    }

    isActiveSkill(skill) {
        let flag = false
        this.activeSkills.forEach(activeSkill => {

            if (skill === activeSkill) {
                flag = true
                return true
            }
        })
        return flag
    }

    isActiveProf(prof) {
        let flag = false
        this.activeProfs?.forEach(activeProf => {
            if (prof === activeProf) {
                flag = true
                return true
            }
        })
        return flag
    }

    getData() {
        return { ...this.data }
    }

    getAxisSkill(skill) {
        const x = this.skillsData[skill].x
        const y = this.skillsData[skill].y
        return { x, y }
    }


    getAxisProf(prof) {
        const x = this.profData[prof].x
        const y = this.profData[prof].y
        return { x, y }
    }

    swapSkills(prof, linkedSkills) {
        let profCoords = { x: 0, y: 0 }
        // console.log("PofCOrds",profCoords)
        const angleStep = (2 * Math.PI) / this.data.length;
        let indexProf = this.data.findIndex(skill => skill.name == prof)

        // this.skillsDataArray.forEach(skill => {
        //     if (skill.name === prof) console.log(true)
        //     // console.log(skill, prof)
        // })
        // console.log(angleStep, indexProf, this.data.length)
        // console.log("angle", indexProf * angleStep )
        profCoords.x = 300 + 300 * Math.cos(indexProf * angleStep + Math.PI * 3 / 2)
        profCoords.y = 300 + 300 * Math.sin(indexProf * angleStep + Math.PI * 3 / 2)
        // console.log("x",profCoords.x, "y" , profCoords.y)

        let minDif = 100000
        let closeSkill = ''
        this.skillsDataArray.forEach(skill => {
            const dif = Math.sqrt(Math.pow((skill.x - profCoords.x), 2) + Math.pow((skill.y - profCoords.y), 2))
            // console.log("skill",skill.name,profCoords, skill.x,skill.y)
            // console.log("diff", dif)
            if (minDif > dif) {
                minDif = dif
                closeSkill = skill.name
                // console.log("closeSkill",closeSkill,profCoords, skill.x,skill.y)
                // console.log("close")
            }
        })
        // console.log(closeSkill)

        const indexSkill = this.skillsDataArray.findIndex(skill => skill.name == closeSkill)
        const indexStart = indexSkill - Math.floor(linkedSkills.length / 2)
        const indexEnd = indexSkill + Math.ceil(linkedSkills.length / 2) - 1
        // console.log(indexStart, indexSkill, indexEnd)

        const newSkillDataArray = []
        this.skillsDataArray.forEach(skill => {
            newSkillDataArray.push({ ...skill })
        })

        for (let i = 0; i < linkedSkills.length; i++) {
            let index
            if (indexStart + i >= 0)
                index = (indexStart + i) % (newSkillDataArray.length)
            else
                index = newSkillDataArray.length + indexStart + i
            const indexTmp = newSkillDataArray.findIndex(skill => skill.name == linkedSkills[i])

            
            const tmp = newSkillDataArray[index].name
            newSkillDataArray[index].name = newSkillDataArray[indexTmp].name
            newSkillDataArray[indexTmp].name = tmp
            // const tmp = newSkillDataArray[index]
            // newSkillDataArray[index] = newSkillDataArray[indexTmp]
            // newSkillDataArray[indexTmp] = tmp
        }

        // console.log(newSkillDataArray)
        this.setSkillsDataArray(newSkillDataArray)
        console.log(newSkillDataArray)

        let newSkillDataObject = {}
        newSkillDataArray.forEach(skill => {
            newSkillDataObject[skill.name] = { x: skill.x, y: skill.y }
        })
        this.setSkillsData(newSkillDataObject)
        console.log(newSkillDataObject)

    }
}