import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from 'src/crud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private serviceUrl = "http://localhost:3500/api/employees";


  constructor(private http:HttpClient) { }


  getAllData():Observable<Employees[]>{
    return this.http.get<Employees[]>(this.serviceUrl)
  };

  addAllData(employee:Employees):Observable<any>{
    return this.http.post<any>(this.serviceUrl,employee)
  }

  updateAllData(id:number, employee:Employees):Observable<any>{
    return this.http.put<any>(`${this.serviceUrl}/${id}`,employee)
  }

  deleteAllData(id:number):Observable<any>{
    return this.http.delete<any>(`${this.serviceUrl}/${id}`);
  }


}
