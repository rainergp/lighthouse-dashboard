export function getServicesConfig(
	serviceApiBaseUrl: string,
) {
	return {
		api: {
			baseUrl: `${serviceApiBaseUrl}`,
			endpoints: {
				report: {
					getReportUrl: `${serviceApiBaseUrl}/report`,
				},
			}
		}
	};
}
