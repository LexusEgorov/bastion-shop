const FILE_TYPES = ['gif', 'jpg', 'png', 'jpeg'];

const checkNumberFieldError = (value : number, min: number, max: number, setError : React.Dispatch<React.SetStateAction<boolean>>) => {
  if(value < 0 || min > value || value > max){
    setError(true);
    return;
  }
  setError(false);
}

const checkTextFieldError = (value: string,  minLength: number, maxLength: number, setError : React.Dispatch<React.SetStateAction<boolean>> )=> {
  if(value.length === 0 || value.length < minLength || value.length > maxLength){
    setError(true);
    return;
  }
  setError(false);
}

const checkTypeFieldError = (value: number, setError : React.Dispatch<React.SetStateAction<boolean>>) => {
  if(value === -1){
    setError(true);
    return;
  }
  setError(false);
}

const checkImgFieldError = (file: string, setError : React.Dispatch<React.SetStateAction<boolean>>) => {
  const matches  = FILE_TYPES.some((it) => file.endsWith(it));
  if(!matches){
    setError(true)
    return;
  }
  setError(false);
}

export {checkImgFieldError, checkNumberFieldError, checkTextFieldError, checkTypeFieldError};
