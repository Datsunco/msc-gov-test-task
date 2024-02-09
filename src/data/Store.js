import { makeAutoObservable, observable } from "mobx";

export default class Store {
    skillsData = {}
    skillsDataArray = []
    profData = {}
    activeSkills = []
    activeProfs = []
    data = []

    constructor(data) {
        makeAutoObservable(this,{
            data: observable
        });
        this.data = data
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
        console.log(skillsData)
    }

    setProfData(profData) {
        this.profData = profData
        console.log('profData',profData)
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

    getData(){
        console.log({...this.data})
        return {...this.data}
    }

    getAxisSkill(skill) {
        const x = this.skillsData[skill].x
        const y = this.skillsData[skill].y
        return {x,y}
    }


    getAxisProf(prof) {
        const x = this.profData[prof].x
        const y = this.profData[prof].y
        return {x,y}
    }

    swapSkills(prof, linkedSkills){
        let profCoords = this.getAxisProf(prof)
        console.log("PofCOrds",profCoords)
        const angleStep = (2 * Math.PI) / this.data.length;
        let indexProf = this.data.findIndex(skill => skill.name == prof)
        this.skillsDataArray.forEach(skill => {
            if (skill.name === prof) console.log(true)
            // console.log(skill, prof)
        })
        // console.log(angleStep, indexProf, this.data.length)
        console.log("angle", indexProf * angleStep )
        profCoords.x = 300 +  300 * Math.cos(indexProf * angleStep + Math.PI * 3 / 2)
        profCoords.y = 300 +  300 * Math.sin(indexProf * angleStep+ Math.PI * 3 / 2)
        console.log("x",profCoords.x, "y" , profCoords.y)
        
    }
}