function Validator (option) {

    // Hàm thực hiện validate
    function validate (inputElement, rule) {
        let errorMessage = rule.test(inputElement.value)
        let errorElement = inputElement.parentElement.querySelector('.form-message')
        if(errorMessage){
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        }
        else{
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
    }

    // lấy element của form
    let formElement = document.querySelector(option.form)
    if(formElement){
        option.rules.forEach(function(rule){
            let inputElement = formElement.querySelector(rule.selector)
            
            if(inputElement){
                inputElement.onblur = function () {
                    validate (inputElement, rule)
                }
            }
        })
    }
}

// Định nghĩa các rules

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value){
            return value.trim() ? undefined : 'Vui lòng nhập tên'
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value){
            const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return re.test(value) ? undefined : 'Email không chính xác'
        }
    }
}