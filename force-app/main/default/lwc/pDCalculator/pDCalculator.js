import { LightningElement } from 'lwc';
const devWeight = .23;
const processWeight = .30
const userWeight = .25;
const testWeight = .22;

export default class PDCalculator extends LightningElement {
    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testDebugDeploymentScore = 50;
    certificationScore = 90;

    calculateScore(){
        let devWeightScore = this.devFundamentalScore * devWeight;
        console.log('The devWeightScore is : ' + devWeightScore);
        let processWeightScore = this.processAutomationScore * processWeight;
        console.log('The processWeightScore is : ' + processWeightScore);
        let userWeightScore = this.userInterfaceScore * userWeight;
        console.log('The userWeightScore is : ' + userWeightScore);
        let testWeightScore = this.testDebugDeploymentScore * testWeight;
        console.log('The testWeightScore is : ' + testWeightScore);
        this.certificationScore = devWeightScore + processWeightScore +
                                  userWeightScore + testWeightScore;
        console.log('The certificationScore is : ' + this.certificationScore);
    }

    handleChange(event){
        console.log(event.target.name, event.target.value);
        const inputName = event.target.name;
        let value = Number(event.target.value);
        console.log('The value for andleChange is : ' + value);
        if(inputName == 'devFundamentals'){
            this.devFundamentalScore = value;
            console.log('The devFundamental score is : ' + this.devFundamentalScore);
        }
        if(inputName == 'processAutomation'){
            this.processAutomationScore = value;
            console.log('The processAutomation score is : ' + this.processAutomationScore);
        } 
        if(inputName == 'userInterface'){
            this.userInterfaceScore = value;
            console.log('The userInterface score is : ' + this.userInterfaceScore);
        } 
        if(inputName == 'testDebugDeployment'){ 
            this.testDebugDeploymentScore = value;
            console.log('The testDebug score is : ' + this.testDebugDeploymentScore);
        }
        
    }
}