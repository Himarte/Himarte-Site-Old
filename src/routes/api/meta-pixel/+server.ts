import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import {
	FacebookAdsApi,
	ServerEvent,
	EventRequest,
	UserData,
	CustomData
} from 'facebook-nodejs-business-sdk';
import { ACCESS_TOKEN_PIXEL_META, ADS_PIXEL_ID } from '$env/static/private';

const access_token = ACCESS_TOKEN_PIXEL_META;
const pixel_id = ADS_PIXEL_ID;
FacebookAdsApi.init(access_token);

export const POST: RequestHandler = async () => {
	try {
		// Obtendo o timestamp atual em segundos (UNIX time)
		const current_timestamp = Math.floor(Date.now() / 1000);

		// Criando o objeto UserData
		const userData_0 = new UserData()
			.setEmails(['7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068']) // Hash de exemplo do email
			.setPhones(['']) // Adicione números de telefone hashados aqui, se necessário
			.setExternalIds([]); // IDs externos (como IDs do cliente) hashados

		// Criando o objeto CustomData (neste caso, está vazio, mas pode ser preenchido conforme necessário)
		const customData_0 = new CustomData();

		// Criando o objeto ServerEvent
		const serverEvent_0 = new ServerEvent()
			.setEventName('Acesso') // Nome do evento
			.setEventTime(current_timestamp) // Timestamp atual em UNIX
			.setUserData(userData_0) // Dados do usuário
			.setCustomData(customData_0) // Dados personalizados (vazio no momento)
			.setActionSource('website'); // Origem do evento

		// Agrupando o evento em uma requisição
		const eventsData = [serverEvent_0];
		const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData);

		// Executando a requisição para a API do Meta Pixel
		const response = await eventRequest.execute();

		// Retornando a resposta
		return json({ success: true, response });
	} catch (error) {
		// Tratando erros, se houver
		console.error('Meta Pixel API error:', error);
		return json({ success: false, error: 'Erro desconhecido' });
	}
};
