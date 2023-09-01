import { SingleFile } from '../../components/singleFile/SingleFile'
import { singleUser } from '../../data'
import './user.scss'

export const User = () => {
    return (
        <div className="user">
        <SingleFile {...singleUser} />
        </div>
    )
}