interface StringsOp{
    strArgument: string | string[]
}


class StringsOperations implements StringsOp{

    readonly helloString: string = 'Hola'

    constructor(public strArgument:string|string[]){
        this.strArgument = strArgument 
    }

    lowerCase(){
        return typeof this.strArgument === 'string' ? this.strArgument.toLowerCase() 
        : this.strArgument.map(elem => elem.toLowerCase())
    }

    upperCase(){
        return typeof this.strArgument === 'string' ? this.strArgument.toUpperCase() 
        : this.strArgument.map(elem => elem.toUpperCase())
    }

    concatHello(){

        return typeof this.strArgument === 'string' ? this.helloString + ' ' + this.toLowerCase() 
        : this.toLowerCase().map(elem => this.helloString + ' ' + elem )
    }

    reverseString(){
        if (typeof this.strArgument === 'string'){
            let reverse = this.strArgument.split("")
            reverse = reverse.reverse()
            reverse = reverse.join("")
            return reverse
        } 
        
        
        if ((typeof this.strArgument !== 'string')){
            let reverse = this.strArgument.map(elem => {
                let rev = elem.split("")
                rev = rev.reverse()
                rev = rev.join("")
                return rev
            })
            return reverse
        }
    }

    deleteChar(char:string){
        char = char.toLowerCase()
        if (typeof this.strArgument === 'string'){
            let splitStr = this.lowerCase().split('')
            for(let i = 0;i<=splitStr.length;i++){
                if (splitStr[i] === char) splitStr.splice(i,1)
            }
            return splitStr.join('')
        }
            

        if(typeof this.strArgument !== 'string'){
            let result = this.lowerCase().map(elem => {
                let splitStr = elem.split('')
                for(let i = 0;i<=splitStr.length;i++){
                    if (splitStr[i] === char) splitStr.splice(i,1)
                }
            return splitStr.join('')
            })
            return result
        }    
            
    }
    
}


const userNames =  ['Rabas333','HDghs65','HGGFSA44'] 

const stringOperation = new StringsOperations(userNames)
//console.log(stringOperation.toLowerCase())
//console.log(stringOperation.concatHello())
//console.log(stringOperation.reverseString())
console.log(stringOperation.deleteChar('a'))


export{}