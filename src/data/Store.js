import {makeAutoObservable} from "mobx";

export default class Store {
    skillsData = []
    activeSkills = []
    activeProfs = []

    constructor() {
        makeAutoObservable(this);
    }

    setActiveSkills(skills){
        this.activeSkills = skills
    }

    setActiveProf(profs){
        this.activeProfs = [profs]
    }

    setSkillsData(skillsData){
        this.activeProfs = skillsData
        console.log(skillsData)
    }

    isActiveSkill(skill){
        let flag = false
        this.activeSkills.forEach(activeSkill => {
            
            if (skill === activeSkill) {
                flag = true
                return true
            }
        })
        return flag
    }

    isActiveProf(prof){
        let flag = false
        this.activeProfs.forEach(activeProf => {
            if (prof === activeProf) {
                flag = true
                return true
            }
        })
        return flag
    }

}