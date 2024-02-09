import { makeAutoObservable } from "mobx";

export default class Store {
    skillsData = {}
    profData = {}
    activeSkills = []
    activeProfs = ["Предприниматель"]
    // activeProfs = []

    constructor() {
        makeAutoObservable(this);
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
}