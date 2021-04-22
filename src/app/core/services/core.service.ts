import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export abstract class CoreService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  public apiEndpoint = `${environment.API_URL}:${environment.API_PORT}${environment.API_PREFIX}/v${environment.API_VERSION}`;
  protected constructor(http: HttpClient) { }
}
