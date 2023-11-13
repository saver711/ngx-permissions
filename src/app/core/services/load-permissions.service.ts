import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoadPermissionsService {
  constructor(private http: HttpClient) {}

  //   SIMULATION
  fetchPermissions(perms: string[]) {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(map(() => perms));
  }
}
