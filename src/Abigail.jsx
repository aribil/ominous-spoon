import './App.css';
function Holaa(props)
{
return(
    <div className="principal">
        <div className='cua1'>
            <div className="textoiz">
                <h1>danza: {props.danza} </h1>
            </div>
        </div>

        <div className='cua1'>    
            <div className='grafico'>
                <img className="grafico" src={props.dibujos} />
            </div>
        </div>
>    
        <div className='cua1'>
            <div className="textode">
                <p>Origen: {props.pais},principal representante:Ballet {props.representante}</p>
            </div>
        </div>
    </div>
    );
}
export default Holaa;