export class GeocoderResponse {
  status: string;
  error_message: string;
  results: google.maps.GeocoderResult[];

  constructor(status: string, results: google.maps.GeocoderResult[]) {
    this.status = status;
    this.results = results;
  }
}
