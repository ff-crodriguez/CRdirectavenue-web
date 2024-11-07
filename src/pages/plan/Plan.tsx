import { useParams } from "react-router-dom";
import PlansParams from "../../types/plans/PlansParams";

/**
 * Plan Page example
 * @returns Returns Jsx Element
 */
const Plan = (): JSX.Element => {
    const params = useParams<PlansParams>();
    const api:string= import.meta.env.VITE_API_URL;
    return (
        <>
            <h1>Plan {params.id}</h1>
            <h2>Api URL - {api}</h2>
        </>
    )
}

export default Plan;