import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CmsserviceService {

  constructor(private httpClient: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse){
    return throwError(errorResponse.error);
  }


  getLeaders(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/leaders').pipe(catchError(this.handleError));
  }
  getProjects(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/projects').pipe(catchError(this.handleError));
  }

  getStakeholder(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/stakeholders').pipe(catchError(this.handleError));
  }


  getManagement(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/management').pipe(catchError(this.handleError));
  }
  getDocuments(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/documents').pipe(catchError(this.handleError));
  }

  getDirectors(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/directors').pipe(catchError(this.handleError));
  }

  getDepartments(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/departments').pipe(catchError(this.handleError));
  }

  getContacts(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/contacts').pipe(catchError(this.handleError));
  }


  getAdvertisements(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/advertisements').pipe(catchError(this.handleError));
  }

  getAnnouncements(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/announcements').pipe(catchError(this.handleError));
  }

  //news code
  getNews(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/news').pipe(catchError(this.handleError));
  }

  //tourism-about-api

  getTourismAboutData(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/getTourismAboutData').pipe(catchError(this.handleError));
  }

  getTourismCardData(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/getTourismCardData').pipe(catchError(this.handleError));
  }

  getTourismMediaData(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/getTourismMediaData').pipe(catchError(this.handleError));
  }

  getTourismSliderData(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/getTourismSliderData').pipe(catchError(this.handleError));
  }

  addTourismData(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertTourism', obj).pipe(catchError(this.handleError));
  }

  attachTourismPic(formData: any): Observable<any> {
    return this.httpClient.post(environment.baseURL + 'api/tourismimage',formData).pipe(catchError(this.handleError));
  }

  updateTourismById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateTourism/'+id, obj).pipe(catchError(this.handleError));
  }


  //End of tourism-about-api


  //Antiquities Card code
  getAntiquitiesCard(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/antiquities').pipe(catchError(this.handleError));
  }
   //Antiquities Slider code
   getAntiquitiesSlider(): Observable<any> {
    return this.httpClient.get(environment.baseURL + 'api/antiquities').pipe(catchError(this.handleError));
  }




  deleteLeaderById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteLeader/'+id).pipe(catchError(this.handleError));
  }

  deleteManagementById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteManagement/'+id).pipe(catchError(this.handleError));
  }

  deleteStakeholderById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteStakeholder/'+id).pipe(catchError(this.handleError));
  }


  deleteDocumentById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteDocument/'+id).pipe(catchError(this.handleError));
  }


   deleteDirectorById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteDirector/'+id).pipe(catchError(this.handleError));
  }

  deleteDepartmentById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteDepartment/'+id).pipe(catchError(this.handleError));
  }



  deleteContactById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteContact/'+id).pipe(catchError(this.handleError));
  }


  deleteAdvertisementById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteAdvertisement/'+id).pipe(catchError(this.handleError));
  }


  deleteAnnouncementById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteAnnouncement/'+id).pipe(catchError(this.handleError));
  }



  //news code
  deleteNewById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteNews/'+id).pipe(catchError(this.handleError));
  }

  // delete antiquities About code
  deleteAntiquitiesAboutById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteAntiquities/'+id).pipe(catchError(this.handleError));
  }

   // delete antiquities CArd code
   deleteAntiquitiesCardById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteAntiquities/'+id).pipe(catchError(this.handleError));
  }
   // delete antiquities Slider code
   deleteAntiquitiesSliderById(id:any): Observable<any> {
    return this.httpClient.delete(environment.baseURL + 'api/deleteAntiquitie/'+id).pipe(catchError(this.handleError));
  }

  addLeader(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertLeader', obj).pipe(catchError(this.handleError));
  }

  addProject(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertProject', obj).pipe(catchError(this.handleError));
  }

  addStakeholder(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertStakeholder', obj).pipe(catchError(this.handleError));
  }


  addManagement(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertManagement', obj).pipe(catchError(this.handleError));
  }
  addDocument(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertDocument', obj).pipe(catchError(this.handleError));
  }


  addDirector(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertDirector', obj).pipe(catchError(this.handleError));
  }

  addContact(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertContact', obj).pipe(catchError(this.handleError));
  }

  addDepartment(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertDepartment', obj).pipe(catchError(this.handleError));
  }

  addAdvertisement(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertAdvertisement', obj).pipe(catchError(this.handleError));
  }


  addAnnouncement(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertAnnouncement', obj).pipe(catchError(this.handleError));
  }

  //news code
  addNew(obj:any): Observable<any>{
    return this.httpClient.post(environment.baseURL+'api/insertNews', obj).pipe(catchError(this.handleError));
  }
    // insert Antiquities about code
    addAntiquitiesAbout(obj:any): Observable<any>{
      return this.httpClient.post(environment.baseURL+'api/insertAntiquities', obj).pipe(catchError(this.handleError));
    }
      // insert Antiquities card code
      addAntiquitiesCard(obj:any): Observable<any>{
        return this.httpClient.post(environment.baseURL+'api/insertAntiquities', obj).pipe(catchError(this.handleError));
      }

        // insert Antiquities slider code
        addAntiquitiesSlider(obj:any): Observable<any>{
          return this.httpClient.post(environment.baseURL+'api/insertAntiquities', obj).pipe(catchError(this.handleError));
        }

  updateLeaderById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateLeader/'+id, obj).pipe(catchError(this.handleError));
  }


  updateProjectById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateProject/'+id, obj).pipe(catchError(this.handleError));
  }

  updateManagementById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateManagement/'+id, obj).pipe(catchError(this.handleError));
  }

  updateStakeholderById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateStakeholder/'+id, obj).pipe(catchError(this.handleError));
  }

  updateDocumentById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateDocument/'+id, obj).pipe(catchError(this.handleError));
  }

  updateDirectorById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateDirector/'+id, obj).pipe(catchError(this.handleError));
  }


  updateDepartmentById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateDepartment/'+id, obj).pipe(catchError(this.handleError));
  }

  updateContactById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateContact/'+id, obj).pipe(catchError(this.handleError));
  }
  updateAdvertisementById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateAdvertisement/'+id, obj).pipe(catchError(this.handleError));
  }

  updateAnnouncementById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateAnnouncement/'+id, obj).pipe(catchError(this.handleError));
  }
  //update new file
  updateNewById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateNews/'+id, obj).pipe(catchError(this.handleError));
  }

   //update antiquities about file
   updateAntiquitiesAboutById(id:any, obj: any): Observable<any>{
    return this.httpClient.put(environment.baseURL+'api/updateAntiquities/'+id, obj).pipe(catchError(this.handleError));
  }

    //update antiquities card file
    updateAntiquitiesCardById(id:any, obj: any): Observable<any>{
      return this.httpClient.put(environment.baseURL+'api/updateAntiquities/'+id, obj).pipe(catchError(this.handleError));
    }
     //update antiquities slider file
     updateAntiquitiesSliderById(id:any, obj: any): Observable<any>{
      return this.httpClient.put(environment.baseURL+'api/updateAntiquities/'+id, obj).pipe(catchError(this.handleError));
    }





  //attach news file
  attachNewsPic(formData: any): Observable<any> {
    return this.httpClient.post(environment.baseURL + 'api/newsimage',formData).pipe(catchError(this.handleError));
  }
  //attach antiquities about file
  attachAntiquitiesAboutPic(formData: any): Observable<any> {
    return this.httpClient.post(environment.baseURL + 'api/antiquitiesimage',formData).pipe(catchError(this.handleError));
  }

   //attach antiquities card file
   attachAntiquitiesCardPic(formData: any): Observable<any> {
    return this.httpClient.post(environment.baseURL + 'api/antiquitiesimage',formData).pipe(catchError(this.handleError));
  }

   //attach antiquities slider file
   attachAntiquitiesSliderPic(formData: any): Observable<any> {
    return this.httpClient.post(environment.baseURL + 'api/antiquitiesimage',formData).pipe(catchError(this.handleError));
  }



  attachDocumentPic(formData: any): Observable<any> {
    return this.httpClient.post(environment.baseURL + 'api/newimage',formData).pipe(catchError(this.handleError));
  }

}
