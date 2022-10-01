<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeaderController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\AdvertisementController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\KalendaController;
use App\Http\Controllers\MifumoController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\SpeechController;
use App\Http\Controllers\StakeholderController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\TenderController;
use App\Http\Controllers\HifadhiController;
use App\Http\Controllers\TovutiController;
use App\Http\Controllers\MitandaoController;
use App\Http\Controllers\RamaniController;
use App\Http\Controllers\ManagementController;
use App\Http\Controllers\AngularController;
use App\Http\Controllers\TourismController;
use  App\Http\Controllers\AntiquitiesController;
use App\Http\Controllers\WildlifeController;
use App\Http\Controllers\ForestController;
use App\Http\Controllers\BeekeepingController;
use App\Http\Controllers\MinistryController;

use App\Model\Leader;
use App\Model\Ministry;
use App\Model\Beekeeping;
use App\Model\Antiquities;
use App\Model\Forest;
use App\Model\Wildlife;
use App\Model\Tourism;
use App\Model\Advertisement;
use App\Model\Announcement;
use App\Model\Contact;
use App\Model\Department;
use App\Model\Director;
use App\Model\Document;
use App\Model\Gallery;
use App\Model\Hifadhi;
use App\Model\Kalenda;
use App\Model\Mifumo;
use App\Model\Mitandao;
use App\Model\News;
use App\Model\Project;
use App\Model\Ramani;
use App\Model\Speech;
use App\Model\Stakeholder;
use App\Model\Statistic;
use App\Model\Tender;
use App\Model\Tovuti;
use App\Model\Management;


/*  */
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 */


 //AUTHENTICATED ROUTES
// Route::group(['middleware'=>['auth:sanctum']], function(){
    //File Upload (image and document) api router
    Route::post('/attachments', [FileUploadController::class, 'attachments']);
    Route::post('/newsimage', [FileUploadController::class, 'newsimage']);
    Route::post('/newimage', [FileUploadController::class, 'newimage']);
    Route::post('/tourismimage', [FileUploadController::class, 'tourismimage']);
    Route::post('/beekeepingimage', [FileUploadController::class, 'beekeepingimage']);
    Route::post('/forestimage', [FileUploadController::class, 'forestimage']);
    Route::post('/antiquitiesimage', [FileUploadController::class, 'antiquitiesimage']);
    Route::post('/wildlifeimage',[FileUploadController::class, 'wildlifeimage']);


    

    // Leader Insert, Update and Delete
    Route::post('/logout', [UserController::class, 'logout']);
    Route::post('/insertLeader', [LeaderController::class, 'store']);
    Route::put('/updateLeader/{id}', [LeaderController::class, 'update']);
    Route::delete('/deleteLeader/{id}', [LeaderController::class, 'destroy']);

    // News Insert, Update and Delete
    Route::post('/insertNews', [NewsController::class, 'store']);
    Route::put('/updateNews/{id}', [NewsController::class, 'update']);
    Route::delete('/deleteNews/{id}', [NewsController::class, 'destroy']);

    // Tourism Insert, Update and Delete
    Route::post('/insertTourism', [TourismController::class, 'store']);
    Route::put('/updateTourism/{id}', [TourismController::class, 'update']);
    Route::delete('/deleteTourism/{id}', [TourismController::class, 'destroy']);

    // Wildlfile Inser ,Update, and  Delete

    Route::post('/insertWildlife',[WildlifeController::class ,'store']);
    Route::put('/updateWildlife/{id}',[WildlifeController::class, 'update']);
    Route::delete('/deleteWildlife/{id}',[WildlifeController::class ,'destroy']);


// Antiquities Inser ,Update, and  Delete

    Route::post('/insertAntiquities',[AntiquitiesController::class ,'store']);
    Route::put('/updateAntiquities/{id}',[AntiquitiesController::class, 'update']);
    Route::delete('/deleteAntiquities/{id}',[AntiquitiesController::class ,'destroy']);


    // beekeeping Insert ,Update, and  Delete

    Route::post('/insertBeekeeping',[BeekeepingController::class ,'store']);
    Route::put('/updateBeekeeping/{id}',[BeekeepingController::class, 'update']);
    Route::delete('/deleteBeekeeping/{id}',[BeekeepingController::class ,'destroy']);
    
    // forest Insert ,Update, and  Delete

    Route::post('/insertForest',[ForestController::class ,'store']);
    Route::put('/updateForest/{id}',[ForestController::class, 'update']);
    Route::delete('/deleteForest/{id}',[ForestController::class ,'destroy']);





    // Advertisement Insert, Update and Delete
    Route::post('/insertAdvertisement', [AdvertisementController::class, 'store']);
    Route::put('/updateAdvertisement/{id}', [AdvertisementController::class, 'update']);
    Route::delete('/deleteAdvertisement/{id}', [AdvertisementController::class, 'destroy']);

    // Announcement Insert, Update and Delete
    Route::post('/insertAnnouncement', [AnnouncementController::class, 'store']);
    Route::put('/updateAnnouncement/{id}', [AnnouncementController::class, 'update']);
    Route::delete('/deleteAnnouncement/{id}', [AnnouncementController::class, 'destroy']);

    // Contact Insert, Update and Delete
    Route::post('/insertContact', [ContactController::class, 'store']);
    Route::put('/updateContact/{id}', [ContactController::class, 'update']);
    Route::delete('/deleteContact/{id}', [ContactController::class, 'destroy']);

    // Department Insert, Update and Delete
    Route::post('/insertDepartment', [DepartmentController::class, 'store']);
    Route::put('/updateDepartment/{id}', [DepartmentController::class, 'update']);
    Route::delete('/deleteDepartment/{id}', [DepartmentController::class, 'destroy']);

    // Director Insert, Update and Delete
    Route::post('/insertDirector', [DirectorController::class, 'store']);
    Route::put('/updateDirector/{id}', [DirectorController::class, 'update']);
    Route::delete('/deleteDirector/{id}', [DirectorController::class, 'destroy']);

    // User Insert, Update and Delete
    Route::post('/insertUser', [UserController::class, 'store']);
    Route::put('/updateUser/{id}', [UserController::class, 'update']);
    Route::delete('/deleteUser/{id}', [UserController::class, 'destroy']);

    // Document Insert, Update and Delete
    Route::post('/insertDocument', [DocumentController::class, 'store']);
    Route::put('/updateDocument/{id}', [DocumentController::class, 'update']);
    Route::delete('/deleteDocument/{id}', [DocumentController::class, 'destroy']);

    // Kalenda Insert, Update and Delete
    Route::post('/insertKalenda', [KalendaController::class, 'store']);
    Route::put('/updateKalenda/{id}', [KalendaController::class, 'update']);
    Route::delete('/deleteKalenda/{id}', [KalendaController::class, 'destroy']);

    // Gallery Insert, Update and Delete
    Route::post('/insertGallery', [GalleryController::class, 'store']);
    Route::put('/updateGallery/{id}', [GalleryController::class, 'update']);
    Route::delete('/deleteGallery/{id}', [GalleryController::class, 'destroy']);

   

    // Project Insert, Update and Delete
    Route::post('/insertProject', [ProjectController::class, 'store']);
    Route::put('/updateProject/{id}', [ProjectController::class, 'update']);
    Route::delete('/deleteProject/{id}', [ProjectController::class, 'destroy']);

    // Speech Insert, Update and Delete
    Route::post('/insertSpeech', [SpeechController::class, 'store']);
    Route::put('/updateSpeech/{id}', [SpeechController::class, 'update']);
    Route::delete('/deleteSpeech/{id}', [SpeechController::class, 'destroy']);

    // Mifumo Insert, Update and Delete
    Route::post('/insertMifumo', [MifumoController::class, 'store']);
    Route::put('/updateMifumo/{id}', [MifumoController::class, 'update']);
    Route::delete('/deleteMifumo/{id}', [MifumoController::class, 'destroy']);

     // Stakeholder Insert, Update and Delete
    Route::post('/insertStakeholder', [StakeholderController::class, 'store']);
    Route::put('/updateStakeholder/{id}', [StakeholderController::class, 'update']);
    Route::delete('/deleteStakeholder/{id}', [StakeholderController::class, 'destroy']);

     // Statistics Insert, Update and Delete
    Route::post('/insertStatistic', [StatisticController::class, 'store']);
    Route::put('/updateStatistic/{id}', [StatisticController::class, 'update']);
    Route::delete('/deleteStatistic/{id}', [StatisticController::class, 'destroy']);

    // Tender Insert, Update and Delete
    Route::post('/insertTender', [TenderController::class, 'store']);
    Route::put('/updateTender/{id}', [TenderController::class, 'update']);
    Route::delete('/deleteTender/{id}', [TenderController::class, 'destroy']);

    // Hifadhi Insert, Update and Delete
    Route::post('/insertHifadhi', [HifadhiController::class, 'store']);
    Route::put('/updateHifadhi/{id}', [HifadhiController::class, 'update']);
    Route::delete('/deleteHifadhi/{id}', [HifadhiController::class, 'destroy']);

    // Tovuti Insert, Update and Delete
    Route::post('/insertTovuti', [TovutiController::class, 'store']);
    Route::put('/updateTovuti/{id}', [TovutiController::class, 'update']);
    Route::delete('/deleteTovuti/{id}', [TovutiController::class, 'destroy']);

    // Mitandao Insert, Update and Delete
    Route::post('/insertMitandao', [MitandaoController::class, 'store']);
    Route::put('/updateMitandao/{id}', [MitandaoController::class, 'update']);
    Route::delete('/deleteMitandao/{id}', [MitandaoController::class, 'destroy']);

    // Ramani Insert, Update and Delete
    Route::post('/insertRamani', [RamaniController::class, 'store']);
    Route::put('/updateRamani/{id}', [RamaniController::class, 'update']);
    Route::delete('/deleteRamani/{id}', [RamaniController::class, 'destroy']);

    // Management Insert, Update and Delete
    Route::post('/insertManagement', [ManagementController::class, 'store']);
    Route::put('/updateManagement/{id}', [ManagementController::class, 'update']);
    Route::delete('/deleteManagement/{id}', [ManagementController::class, 'destroy']);
//});


// PUBLIC ROUTES
    // User api router for authentication
    Route::post('/register', [UserController::class, 'registration']);
    Route::post('/login', [UserController::class, 'login']);

    // Leader api router
    Route::get('/leaders', [LeaderController::class, 'index']);
    Route::get('/leadersdel', [LeaderController::class, 'indexdel']);
    Route::get('/leader/{id}', [LeaderController::class, 'show']);

    // News api router
    Route::get('/news', [NewsController::class, 'index']);
    Route::get('/news/{id}', [NewsController::class, 'show']);

    //Tourism Api router and getting data about &  card & media & slider

    Route::get('/tourism', [TourismController::class, 'index']);
    Route::get('/tourism/{id}', [TourismController::class, 'show']);
    Route::get('/getTourismAboutData', [TourismController::class, 'getTourismAboutData']);   
    Route::get('/getTourismCardData', [TourismController::class, 'getTourismCardData']);
    Route::get('/getTourismMediaData', [TourismController::class, 'getTourismMediaData']);
    Route::get('/getTourismSliderData', [TourismController::class, 'getTourismSliderData']);






    // wildlife Api router
   Route::get ('/wildlife',[WildlifeController::class,'index']);
   Route::get('/wildlife/{id}',[WildlifeController::class,'show']);

    // Antiquities Api router
    Route::get ('/antiquities',[AntiquitiesController::class,'index']);
    Route::get('/antiquities/{id}',[AntiquitiesController::class,'show']);


    // Forest API router 

    Route::get ('/forest',[ForestController::class,'index']);
    Route::get ('/forest/{id}',[ForestController::class, 'show']);


    //beekeeping API router
    Route::get ('/beekeeping',[BeekeepingController::class, 'index']);
    Route::get ('/beekeeping/{id}',[BeekeepingController::class, 'show']);

    // Advertisement api router
    Route::get('/advertisements', [AdvertisementController::class, 'index']);
    Route::get('/advertisement/{id}', [AdvertisementController::class, 'show']);

    // Announcement api router
    Route::get('/announcements', [AnnouncementController::class, 'index']);
    Route::get('/announcement/{id}', [AnnouncementController::class, 'show']);

    // Contact api router
    Route::get('/contacts', [ContactController::class, 'index']);
    Route::get('/contact/{id}', [ContactController::class, 'show']);

    // Department api router
    Route::get('/departments', [DepartmentController::class, 'index']);
    Route::get('/department/{id}', [DepartmentController::class, 'show']);

    // Director api router
    Route::get('/directors', [DirectorController::class, 'index']);
    Route::get('/director/{id}', [DirectorController::class, 'show']);

    // User api router
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/user/{id}', [UserController::class, 'show']);

    // Document api router
    Route::get('/documents', [DocumentController::class, 'index']);
    Route::get('/document/{id}', [DocumentController::class, 'show']);
    Route::get('/acts-and-policies', [DocumentController::class, 'acts']);
    Route::get('/laws-and-regulations', [DocumentController::class, 'laws']);
    Route::get('/reports-and-budgets', [DocumentController::class, 'reportsbudgets']);
    Route::get('/documents-and-forms', [DocumentController::class, 'documentform']);
    Route::get('/projects-and-programs', [DocumentController::class, 'projectprogram']);
    Route::get('/other-publications', [DocumentController::class, 'otherpublication']);



    //Kalenda api router
    Route::get('/kalendas', [KalendaController::class, 'index']);
    Route::get('/kalenda/{id}', [KalendaController::class, 'show']);

    // Gallery api router
    Route::get('/galleries', [GalleryController::class, 'index']);
    Route::get('/gallery/{id}', [GalleryController::class, 'show']);

    //ministry api router 
    Route::get('/ministry',[MinistryController::class, 'index']);
    Route::get('/ministry/{id}',[MinistryController::class, 'show']);

    // Project api router
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/project/{id}', [ProjectController::class, 'show']);

    // Speech api router
    Route::get('/speeches', [SpeechController::class, 'index']);
    Route::get('/speech/{id}', [SpeechController::class, 'show']);

    // Mifumo api router
    Route::get('/mifumos', [MifumoController::class, 'index']);
    Route::get('/mifumo/{id}', [MifumoController::class, 'show']);

    // Stakeholder api router
    Route::get('/stakeholders', [StakeholderController::class, 'index']);
    Route::get('/stakeholder/{id}', [StakeholderController::class, 'show']);
    Route::get('/tour-operators', [StakeholderController::class, 'touroperator']);
    Route::get('/hunting-companies', [StakeholderController::class, 'hunting']);
    Route::get('/licensed-researches', [StakeholderController::class, 'researches']);
    Route::get('/trophy-dealers', [StakeholderController::class, 'trophy']);
    Route::get('/forest-products-exporters', [StakeholderController::class, 'forest']);

    // Statistic api router
    Route::get('/statistics', [StatisticController::class, 'index']);
    Route::get('/statistic/{id}', [StatisticController::class, 'show']);

    // Tenders api router
    Route::get('/tenders', [TenderController::class, 'index']);
    Route::get('/tender/{id}', [TenderController::class, 'show']);

    // Hifadhi api router
    Route::get('/hifadhi', [HifadhiController::class, 'index']);
    Route::get('/hifadhi/{id}', [HifadhiController::class, 'show']);

    // Tovuti api router
    Route::get('/tovuti', [TovutiController::class, 'index']);
    Route::get('/tovuti/{id}', [TovutiController::class, 'show']);

    // Mitandao api router
    Route::get('/mitandao', [MitandaoController::class, 'index']);
    Route::get('/mitandao/{id}', [MitandaoController::class, 'show']);

    // Ramani api router
    Route::get('/ramani', [RamaniController::class, 'index']);
    Route::get('/ramani/{id}', [RamaniController::class, 'show']);

    // Management api router
    Route::get('/management', [ManagementController::class, 'index']);
    Route::get('/management/{id}', [ManagementController::class, 'show']);


