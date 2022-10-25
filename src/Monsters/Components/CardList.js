import { Card } from "./Card"

export const CardList=({monsters})=>{
return(
monsters.map((monster)=>(
    <Card key={monster.id} id={monster.id} email={monster.email} name={monster.name} />
))
);
}