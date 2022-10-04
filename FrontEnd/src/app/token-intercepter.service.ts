import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any, next:any) {
    let authservice=this.injector.get(AuthService);
    let tokenizedRequest=req.clone({
      setHeader:{
        Authorization:`Bearer ${authservice.getToken()}`
      }
    })
    return next.handle(tokenizedRequest)
  }
}
