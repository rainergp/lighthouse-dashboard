import {getServicesConfig} from './configs/services.config';

const serviceApiBaseUrl = 'http://localhost:3000/api';

export const servicesConfig = getServicesConfig(
	serviceApiBaseUrl
);

export const environment = {
	production: true,
	services: servicesConfig
};
