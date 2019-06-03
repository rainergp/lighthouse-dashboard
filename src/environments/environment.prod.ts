import {getServicesConfig} from './configs/services.config';

const filesHostUrl = 'http://localhost:3000/reports/';
const serviceApiBaseUrl = 'http://localhost:3000/api';

export const servicesConfig = getServicesConfig(
	serviceApiBaseUrl
);

export const environment = {
	production: true,
	services: servicesConfig,
	filesHostUrl
};
