import { Button } from '@mui/material'

const CustomButton = (props) => {
  return (
    <Button {...props}
        sx={{backgroundColor : "#ff0000"}}>
        {props.children}
    </Button>
      
  )
}

export default CustomButton
