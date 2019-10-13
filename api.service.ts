import { NetworkService, ConnectionStatus } from './network.service';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, from, throwError } from 'rxjs';
import { tap, map, catchError,switchMap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OfflineManagerService } from './offline-manager.service';
import { API_BASE_URL,API_STORAGE_KEY } from '../../environments/environment';
import { UpdateStatusRequest } from '../models/updatestatus.request.modal';
import { UpdateEventRequest } from '../models/updateevent.request.modal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private networkService: NetworkService, 
    private httpAngular: HttpClient,
    private storage: Storage,
    private offlineManager: OfflineManagerService) { }

    //Get all claims of logged in user
    getClaims(forceRefresh: boolean = false): Observable<any[]>{
      return from(this.storage.get('ME'))
      .pipe(
          switchMap(userInfo => {
            let me=JSON.parse(userInfo);
            let url= API_BASE_URL.replace('*CC*',me.companyCode)+'/claim_api/claims?logged_in_adjuster_claims=1&type=json';
            const httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer '+me.token})};
            if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline || !forceRefresh) {
              // Return the cached data from Storage
              return from(this.getLocalData('CLAIMS'));
            } else {
            // Return real API data and store it locally
              return this.httpAngular.get<any[]>(url,httpOptions).pipe(
                tap(res => {
                  console.log('GET CLAIMS', res);
                  //if(res[0].error_message == undefined)
                  this.setLocalData('CLAIMS', res);
                }),
                catchError((x, caught) => {
                  return throwError(x);
                }),
              );
            }
        })
      );
    }

    //Get a single claim by claim_number
    getClaimDetails(forceRefresh: boolean = false,claimNumber:string): Observable<any>{
      return from(this.storage.get('ME'))
      .pipe(
          switchMap(userInfo => {
            let me=JSON.parse(userInfo);
            let url= API_BASE_URL.replace('*CC*',me.companyCode)+'/claim_api/claims?claimNumber='+claimNumber+'&type=json';
            const httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer '+me.token})};
            if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline || !forceRefresh) {
              // Return the cached data from Storage
              return from(this.getLocalData('CLAIMS-'+claimNumber));
            } else {
            // Return real API data and store it locally
              return this.httpAngular.get<any>(url,httpOptions).pipe(
                tap(res => {
                  console.log('GET CLAIMDETAILS', res);
                  if(res.error_message == undefined)
                    this.setLocalData('CLAIMS-'+claimNumber, res);
                }),
                catchError((x, caught) => {
                  return throwError(x);
                }),
              );
            }
        })
      );
    }

    //Get profile details of logged in user
    getProfile(forceRefresh: boolean = false): Observable<any[]>{
      return from(this.storage.get('ME'))
      .pipe(
          switchMap(userInfo => {
            let me=JSON.parse(userInfo);
            let url= API_BASE_URL.replace('*CC*',me.companyCode)+'/claim_api/resources?resource_username='+me.userName+'&type=json';
            const httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer '+me.token})};
            if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline || !forceRefresh) {
              // Return the cached data from Storage
              return from(this.getLocalData('PROFILE-'+me.userName));
            } else {
            // Return real API data and store it locally
              return this.httpAngular.get<any>(url,httpOptions).pipe(
                tap(res => {
                  console.log('GET PROFILE', res);
                  if(res.error_message == undefined)
                    this.setLocalData('PROFILE-'+me.userName, res);
                }),
                catchError((x, caught) => {
                  return throwError(x);
                }),
              );
            }
        })
      );
    }

    //get certificates  by resource emal
    getCertificates(forceRefresh: boolean = false,email:string): Observable<any[]>{
      return from(this.storage.get('ME'))
      .pipe(
          switchMap(userInfo => {
            let me=JSON.parse(userInfo);
            let url= API_BASE_URL.replace('*CC*',me.companyCode)+'/claim_api/resources/get_certificates?resource_email='+email+'&expiring_certificates=1&type=json';
            const httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer '+me.token})};
            if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline || !forceRefresh) {
              // Return the cached data from Storage
              return from(this.getLocalData('CERTIFICATES-'+me.userName));
            } else {
            // Return real API data and store it locally
              return this.httpAngular.get<any[]>(url,httpOptions).pipe(
                tap(res => {
                  console.log('GET CERTIFICATES', res);
                  //if(res.length>0 && res[0].error_message == undefined)
                  this.setLocalData('CERTIFICATES-'+me.userName, res);
                }),
                catchError((x, caught) => {
                  return throwError(x);
                }),
              );
            }
        })
      );
    }

    //get Licenses by resource emal
    getLicenses(forceRefresh: boolean = false,email:string): Observable<any[]>{
      return from(this.storage.get('ME'))
      .pipe(
          switchMap(userInfo => {
            let me=JSON.parse(userInfo);
            let url= API_BASE_URL.replace('*CC*',me.companyCode)+'/claim_api/resources/get_licenses?resource_email='+email+'&expiring_licenses=1&type=json';
            const httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer '+me.token})};
            
            if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline || !forceRefresh) {
              // Return the cached data from Storage
              return from(this.getLocalData('LICENSES-'+me.userName));
            } else {
            // Return real API data and store it locally
              return this.httpAngular.get<any[]>(url,httpOptions).pipe(
                tap(res => {
                  console.log('GET LICENSES', res);
                  //if(res[0].error_message == undefined)
                  this.setLocalData('LICENSES-'+me.userName, res);
                }),
                catchError((x, caught) => {
                  return throwError(x);
                }),
              );
            }
        })
      );
    }

    //Get adjuster_available status
    getStatus(forceRefresh: boolean = false): Observable<any[]>{
      return from(this.storage.get('ME'))
      .pipe(
          switchMap(userInfo => {
            let me=JSON.parse(userInfo);
            let url= API_BASE_URL.replace('*CC*',me.companyCode)+'/claim_api/resources?resource_username='+me.userName+'&type=json';
            const httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer '+me.token})};
            if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline || !forceRefresh) {
              // Return the cached data from Storage
              return from(this.getLocalData('STATUS-'+me.userName));
            } else {
            // Return real API data and store it locally
              return this.httpAngular.get<any>(url,httpOptions).pipe(
                tap(res => {
                  console.log('GET STATUS: ', res[0].adjuster_available);
                  if(res.error_message == undefined)
                    this.setLocalData('STATUS-'+me.userName, res);
                }),
                catchError((x, caught) => {
                  return throwError(x);
                }),
              );
            }
        })
      );
    }
  
  //Test API
  addDog(data): Observable<any> {
    const url = `${API_BASE_URL}/dogs/`;
    if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline) {
      return from(this.offlineManager.storeRequest(url, 'POST', data));
    } else {
      return this.httpAngular.post(url, data).pipe(
        catchError(err => {
          this.offlineManager.storeRequest(url, 'POST', data);
          throw new Error(err);
        })
      );
    }
  }

  updateStatus(data:UpdateStatusRequest): Observable<any> {
    return from(this.storage.get('ME'))
      .pipe(
          switchMap(userInfo => {
            let me=JSON.parse(userInfo);
            let url= API_BASE_URL.replace('*CC*',me.companyCode)+'/claim_api/resource/update';
            const httpOptions = {headers: new HttpHeaders({
              'Authorization': 'Bearer '+me.token,
              'Content-Type': 'application/x-www-form-urlencoded'
              //,'responseType':'text',
              //'accept':'application/json'
            }
              )};
            if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline) {
              console.log("THROWING OFFLINE ERROR");
              throw new Error("OFFLINE");
            } else {              
              let body = `username=${data.username}&adjuster_available=${data.adjuster_available}&type=json`;
              return this.httpAngular.post(url, body,httpOptions).pipe( 
                catchError(err => {
                  console.log("THROWING API ERROR" + JSON.stringify(err));
                  throw new Error(err);
                })
              );
            }
        })
      );
  }

  updateEvent(data:UpdateEventRequest): Observable<any> {
    return from(this.storage.get('ME'))
      .pipe(
          switchMap(userInfo => {
            let me=JSON.parse(userInfo);
            let url= API_BASE_URL.replace('*CC*',me.companyCode)+'/claim_api/calendar/update/';
            const httpOptions = {headers: new HttpHeaders({
              'Authorization': 'Bearer '+me.token,
              'Content-Type': 'application/x-www-form-urlencoded'
              //,'responseType':'text',
              //'accept':'application/json'
            }
              )};
            if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline) {
              console.log("THROWING OFFLINE ERROR");
              throw new Error("OFFLINE");
            } else {              
              let body = `username=${data.id}&adjuster_available=${data.adjuster_available}&type=json`;
              return this.httpAngular.post(url, body,httpOptions).pipe( 
                catchError(err => {
                  console.log("THROWING API ERROR" + JSON.stringify(err));
                  throw new Error(err);
                })
              );
            }
        })
      );
  }

  // Save result of API requests
  private setLocalData(key, data) {
    console.log('ApiService::setLocalData(key, data) | method called', key, data);
    this.storage.ready().then(() => {
      this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
    });
  }

  // Get cached API result
  private getLocalData(key) {
    console.log('ApiService::getLocalData(key) | method called', key);
    return this.storage.get(`${API_STORAGE_KEY}-${key}`);
  }

  //Get Events List of logged in user
  getEvents(forceRefresh: boolean = false): Observable<any[]>{
    return from(this.storage.get('ME'))
    .pipe(
        switchMap(userInfo => {
          let me=JSON.parse(userInfo);
          //const API_BASE_URL_PRO = 'https://*CC*.claimaticapp.com';
          let url= API_BASE_URL.replace('*CC*',me.companyCode)+'/claim_api/resources?resource_username='+me.userName+'&type=json';
          const httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer '+me.token})};
          if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline || !forceRefresh) {
            // Return the cached data from Storage
            return from(this.getLocalData('Events-'+me.userName));
          } else {
          // Return real API data and store it locally
            return this.httpAngular.get<any>(url,httpOptions).pipe(
              tap(res => {
                console.log('GET Events', res);
                if(res.error_message == undefined)
                  this.setLocalData('Events-'+me.userName, res);
              }),
              catchError((x, caught) => {
                return throwError(x);
              }),
            );
          }
      })
    );
  }
}
