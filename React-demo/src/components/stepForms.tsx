import {} from "./Steps"

export interface StepsData {
    userName: string,
    email: string,
    company: string,
    carMake: string,
    carYear: string
}
export const UserForm = (data : StepsData, setData : () => null) => {
    return (<><label>Name: </label><input type="input" name="Name" value={data.userName} />
    <p />
    <label>Email: </label><input type="input" name="email" /></>);
}