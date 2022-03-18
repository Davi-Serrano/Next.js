import { Center, Label, Title} from  "../styles/styled.js"

export default function Home(){
    return(
        <Center>
            <Title>
                <h2>Welcome to CBank</h2>
            </Title>
            
            <Label>
                <strong>Register :</strong>
                <p>  Register with Github </p>
            </Label>
                
            <Label>
                <strong>Login :</strong>
                <p> Sing In with Github </p> 
            </Label>
        </Center>
    );
}
