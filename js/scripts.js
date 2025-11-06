class Validator{

    constructor(){
        this.validations =[
            'data-min-length',
        ]
    }

    //iniciar a validação de todos os campos
    validate(form){

        //pegar os inputs do formulario
        let inputs = form.getElementsByTagName('input');

        //transformo uma HTMLCollection em array
        let inputsArray = [...inputs];

        //loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input){
           
            //loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++){
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){

                //transforma data-min-length em minlenght //limpando a string para virar um método
                let method = this.validations[i].replace('data-', '').replace('-', '');   
                
                //valor do input
                let value = input.getAttribute(this.validations[i]);

                //chamar o método
                this[method](input, value);

            }
          }  
        }, this);
    }

    //verifica se um input tem um número mínimo de caracteres
    minlength(input, minValue){

        console.log(input);
        console.log(minValue);

    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

//evento que dispara as validações

submit.addEventListener('click', function(e){

    e.preventDefault();

    validator.validate(form); //Mapeando todos os inputs que tem no formulario

});