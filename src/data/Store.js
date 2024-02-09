import { makeAutoObservable } from "mobx";

export default class Store {
    skillsData = {}
    activeSkills = []
    activeProfs = []

    constructor() {
        makeAutoObservable(this);
    }

    
    setActiveSkills(skills) {
        this.activeSkills = skills
    }

    setActiveProf(profs) {
        console.log('setProf', profs)
        this.activeProfs = [profs]
    }

    setSkillsData(skillsData) {
        this.activeProfs = skillsData
        console.log(skillsData)
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
        console.log(this.activeProfs)
        let flag = false
        this?.activeProfs.forEach(activeProf => {
            if (prof === activeProf) {
                flag = true
                return true
            }
        })
        return flag
    }

    getAxisSkill(skill) {
        console.log(skill,this.skillsData.filter(storeSkill => storeSkill.name === skill))
        // linkedSkillsAxis.push(store.skillsData.filter(storeSkill => storeSkill.name === skill))
        // console.log(skill, store.skillsData.filter(storeSkill => storeSkill.name === skill))

    }

}