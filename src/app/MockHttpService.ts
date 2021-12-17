import { Observable, of } from "rxjs";
import { User } from "src/models/user";

export class MockHttpService{

    getUsers(): Observable<User[]> {
        let user: User = {
            userId: '1',
            userName: 'Teszt Elek'
        };

        return of([user]);
    }
    
      checkPassword(): Observable<boolean> {
        return of(true);
    }
    
      getRandoms(): Observable<number[]> {
        return of([1 ,2 ,3 ,4 ,5 ,6]);
     }
}