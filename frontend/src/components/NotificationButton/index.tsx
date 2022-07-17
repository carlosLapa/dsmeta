import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

// o botão recebe um parametro do frontend através deste Props - 
// que permite que um componente do React receba parametros
// neste caso o saleId, pois com esse id conseguimos chamar a requisição para enviar sms
// depois é chamado como parametro na functions seguintes 
type Props = {
    saleId: number;
}

function handleClick(saleId: number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`)
        .then(response => {
            console.log("Sucesso");
        })
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)} >
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
