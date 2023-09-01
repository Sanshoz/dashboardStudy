import "./add.scss"
import { GridColDef } from '@mui/x-data-grid'

type Props = {
    slug: string,
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Add = (props: Props) =>{

    // const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) =>{
    //     e.preventDefault();
    // }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Adicione aqui a lógica para lidar com o envio do formulário, se necessário.
      }
    return (
        <div className="add">
          <div className="modal">
            <span className="close" onClick={() => props.setOpen(false)}>
              X
            </span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={()=>handleSubmit}>
              {props.columns
                .filter((item) => item.field !== "id" && item.field !== "img")
                .map((column) => (
                  <div className="item">
                    <label>{column.headerName}</label>
                    <input type={column.type} placeholder={column.field} />
                  </div>
                ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      );
    
}