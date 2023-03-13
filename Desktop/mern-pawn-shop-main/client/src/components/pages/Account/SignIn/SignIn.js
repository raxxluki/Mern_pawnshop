import {Input, Label} from "../../../common/forms";

const SignIn = () => {
    return <>
        <h1>Sign in to your account.</h1>
        <form>
            <fieldset className="">
                <Label className="" htmlFor="username" text="Username"/>
                <Input className="" type="text" placeholder="Username" defaultValue=""/>
            </fieldset>

        </form>
    </>
}

export default SignIn;