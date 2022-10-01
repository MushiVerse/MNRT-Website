import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmshomeComponent } from './pages/cmshome/cmshome.component';
import { CmsleadersComponent } from './pages/cmsleaders/cmsleaders.component';
import { CmsnewsComponent } from './pages/cmsnews/cmsnews.component';

import { UpdateLeaderComponent } from './pages/dialogs/leaders/update-leader.component';

import { AddLeaderComponent } from './pages/dialogs/leaders/add-leader.component';
import { DeleteLeaderComponent } from './pages/dialogs/leaders/delete-leader.component';
import { ViewLeaderComponent } from './pages/dialogs/leaders/view-leader.component';
import { AddNewComponent } from './pages/dialogs/news/add-new.component';
import { ViewNewComponent } from './pages/dialogs/news/view-new.component';
import { UpdateNewComponent } from './pages/dialogs/news/update-new.component';
import { DeleteNewComponent } from './pages/dialogs/news/delete-new.component';
import { CmsadvertisementsComponent } from './pages/cmsadvertisements/cmsadvertisements.component';
import { AddAdvertisementComponent } from './pages/dialogs/advertisements/add-advertisement.component';
import { UpdateAdvertisementComponent } from './pages/dialogs/advertisements/update-advertisement.component';
import { DeleteAdvertisementComponent } from './pages/dialogs/advertisements/delete-advertisement.component';
import { ViewAdvertisementComponent } from './pages/dialogs/advertisements/view-advertisement.component';
import { CmsannouncementsComponent } from './pages/cmsannouncements/cmsannouncements.component';
import { ViewAnnouncementComponent } from './pages/dialogs/announcements/view-announcement.component';
import { AddAnnouncementComponent } from './pages/dialogs/announcements/add-announcement.component';
import { UpdateAnnouncementComponent } from './pages/dialogs/announcements/update-announcement.component';
import { DeleteAnnouncementComponent } from './pages/dialogs/announcements/delete-announcement.component';
import { CmscontactsComponent } from './pages/cmscontacts/cmscontacts.component';
import { DeleteContactComponent } from './pages/dialogs/contacts/delete-contact.component';
import { ViewContactComponent } from './pages/dialogs/contacts/view-contact.component';
import { AddContactComponent } from './pages/dialogs/contacts/add-contact.component';
import { UpdateContactComponent } from './pages/dialogs/contacts/update-contact.component';
import { CmsdepartmentsComponent } from './pages/cmsdepartments/cmsdepartments.component';
import { UpdateDepartmentComponent } from './pages/dialogs/departments/update-department.component';
import { AddDepartmentComponent } from './pages/dialogs/departments/add-department.component';
import { DeleteDepartmentComponent } from './pages/dialogs/departments/delete-department.component';
import { ViewDepartmentComponent } from './pages/dialogs/departments/view-department.component';
import { CmsdirectorsComponent } from './pages/cmsdirectors/cmsdirectors.component';
import { ViewDirectorComponent } from './pages/dialogs/directors/view-director.component';
import { AddDirectorComponent } from './pages/dialogs/directors/add-director.component';
import { UpdateDirectorComponent } from './pages/dialogs/directors/update-director.component';
import { DeleteDirectorComponent } from './pages/dialogs/directors/delete-director.component';
import { CmsdocumentsComponent } from './pages/cmsdocuments/cmsdocuments.component';
import { DeleteDocumentComponent } from './pages/dialogs/documents/delete-document.component';
import { AddDocumentComponent } from './pages/dialogs/documents/add-document.component';
import { ViewDocumentComponent } from './pages/dialogs/documents/view-document.component';
import { UpdateDocumentComponent } from './pages/dialogs/documents/update-document.component';
import { CustomeMaterialsModule } from '../materials/custome-materials.module';
import { CmsmanagementComponent } from './pages/cmsmanagement/cmsmanagement.component';
import { UpdateManagementComponent } from './pages/dialogs/management/update-management.component';
import { DeleteManagementComponent } from './pages/dialogs/management/delete-management.component';
import { AddManagementComponent } from './pages/dialogs/management/add-management.component';
import { ViewManagementComponent } from './pages/dialogs/management/view-management.component';
import { CmsstakeholdersComponent } from './pages/cmsstakeholders/cmsstakeholders.component';
import { ViewStakeholderComponent } from './pages/dialogs/stakeholder/view-stakeholder.component';
import { AddStakeholderComponent } from './pages/dialogs/stakeholder/add-stakeholder.component';
import { UpdateStakeholderComponent } from './pages/dialogs/stakeholder/update-stakeholder.component';
import { DeleteStakeholderComponent } from './pages/dialogs/stakeholder/delete-stakeholder.component';
import { CmsprojectsComponent } from './pages/cmsprojects/cmsprojects.component';
import { CmsprojectComponent } from './pages/cmsproject/cmsproject.component';
import { ViewProjectComponent } from './pages/dialogs/project/view-project.component';
import { AddProjectComponent } from './pages/dialogs/project/add-project.component';
import { UpdateProjectComponent } from './pages/dialogs/project/update-project.component';
import { DeleteProjectComponent } from './pages/dialogs/project/delete-project.component';
import { CmstourismComponent } from './pages/cmssectors/cmstourism/cmstourism.component';
import { CmswildlifeComponent } from './pages/cmssectors/cmswildlife/cmswildlife.component';
import { CmsforestComponent } from './pages/cmssectors/cmsforest/cmsforest.component';
import { CmsantiquitiesComponent } from './pages/cmssectors/cmsantiquities/cmsantiquities.component';
import { CmsbeekeepingComponent } from './pages/cmssectors/cmsbeekeeping/cmsbeekeeping.component';
import { CmsTourismSliderAddComponent } from './pages/dialogs/cmstourism/slider/cms-tourism-slider-add.component';
import { CmsTourismSliderUpdateComponent } from './pages/dialogs/cmstourism/slider/cms-tourism-slider-update.component';
import { CmsTourismCardAddComponent } from './pages/dialogs/cmstourism/card/cms-tourism-card-add.component';
import { CmsTourismCardUpdateComponent } from './pages/dialogs/cmstourism/card/cms-tourism-card-update.component';
import { CmsTourismMediaUpdateComponent } from './pages/dialogs/cmstourism/media/cms-tourism-media-update.component';
import { CmsTourismMediaAddComponent } from './pages/dialogs/cmstourism/media/cms-tourism-media-add.component';
import { CmsTourismAboutAddComponent } from './pages/dialogs/cmstourism/about/cms-tourism-about-add.component';
import { CmsTourismAboutUpdateComponent } from './pages/dialogs/cmstourism/about/cms-tourism-about-update.component';
import { CmsForestAboutUpdateComponent } from './pages/dialogs/cmsforest/about/cms-forest-about-update.component';
import { CmsForestAboutAddComponent } from './pages/dialogs/cmsforest/about/cms-forest-about-add.component';
import { CmsForestCardAddComponent } from './pages/dialogs/cmsforest/card/cms-forest-card-add.component';
import { CmsForestCardUpdateComponent } from './pages/dialogs/cmsforest/card/cms-forest-card-update.component';
import { CmsForestMediaUpdateComponent } from './pages/dialogs/cmsforest/media/cms-forest-media-update.component';
import { CmsForestMediaAddComponent } from './pages/dialogs/cmsforest/media/cms-forest-media-add.component';
import { CmsForestSliderAddComponent } from './pages/dialogs/cmsforest/slider/cms-forest-slider-add.component';
import { CmsForestSliderUpdateComponent } from './pages/dialogs/cmsforest/slider/cms-forest-slider-update.component';
import { CmsBeekeeepingSliderUpdateComponent } from './pages/dialogs/cmsbeekeeping/slider/cms-beekeeeping-slider-update.component';
import { CmsBeekeeepingSliderAddComponent } from './pages/dialogs/cmsbeekeeping/slider/cms-beekeeeping-slider-add.component';
import { CmsBeekeeepingMediaAddComponent } from './pages/dialogs/cmsbeekeeping/media/cms-beekeeeping-media-add.component';
import { CmsBeekeeepingMediaUpdateComponent } from './pages/dialogs/cmsbeekeeping/media/cms-beekeeeping-media-update.component';
import { CmsBeekeeepingCardUpdateComponent } from './pages/dialogs/cmsbeekeeping/card/cms-beekeeeping-card-update.component';
import { CmsBeekeeepingCardAddComponent } from './pages/dialogs/cmsbeekeeping/card/cms-beekeeeping-card-add.component';
import { CmsBeekeeepingAboutAddComponent } from './pages/dialogs/cmsbeekeeping/about/cms-beekeeeping-about-add.component';
import { CmsBeekeeepingAboutUpdateComponent } from './pages/dialogs/cmsbeekeeping/about/cms-beekeeeping-about-update.component';
import { CmsAntiquitiesAboutUpdateComponent } from './pages/dialogs/cmsantiquities/about/cms-antiquities-about-update.component';
import { CmsAntiquitiesAboutAddComponent } from './pages/dialogs/cmsantiquities/about/cms-antiquities-about-add.component';
import { CmsAntiquitiesCardAddComponent } from './pages/dialogs/cmsantiquities/card/cms-antiquities-card-add.component';
import { CmsAntiquitiesCardUpdateComponent } from './pages/dialogs/cmsantiquities/card/cms-antiquities-card-update.component';
import { CmsAntiquitiesMediaUpdateComponent } from './pages/dialogs/cmsantiquities/media/cms-antiquities-media-update.component';
import { CmsAntiquitiesMediaAddComponent } from './pages/dialogs/cmsantiquities/media/cms-antiquities-media-add.component';
import { CmsAntiquitiesSliderAddComponent } from './pages/dialogs/cmsantiquities/slider/cms-antiquities-slider-add.component';
import { CmsAntiquitiesSliderUpdateComponent } from './pages/dialogs/cmsantiquities/slider/cms-antiquities-slider-update.component';
import { CmsWildlifeSliderUpdateComponent } from './pages/dialogs/cmswildlife/slider/cms-wildlife-slider-update.component';
import { CmsWildlifeSliderAddComponent } from './pages/dialogs/cmswildlife/slider/cms-wildlife-slider-add.component';
import { CmsWildlifeMediaAddComponent } from './pages/dialogs/cmswildlife/media/cms-wildlife-media-add.component';
import { CmsWildlifeMediaUpdateComponent } from './pages/dialogs/cmswildlife/media/cms-wildlife-media-update.component';
import { CmsWildlifeCardUpdateComponent } from './pages/dialogs/cmswildlife/card/cms-wildlife-card-update.component';
import { CmsWildlifeCardAddComponent } from './pages/dialogs/cmswildlife/card/cms-wildlife-card-add.component';
import { CmsWildlifeAboutAddComponent } from './pages/dialogs/cmswildlife/about/cms-wildlife-about-add.component';
import { CmsWildlifeAboutUpdateComponent } from './pages/dialogs/cmswildlife/about/cms-wildlife-about-update.component';
import { CmsBeekeepingCardEditorComponent } from './pages/dialogs/cmsbeekeeping/card/cms-beekeeping-card-editor/cms-beekeeping-card-editor.component';
import { CmsBeekeepingAboutEditorComponent } from './pages/dialogs/cmsbeekeeping/about/cms-beekeeping-about-editor/cms-beekeeping-about-editor.component';
import { CmsBeekeepingMediaEditorComponent } from './pages/dialogs/cmsbeekeeping/media/cms-beekeeping-media-editor/cms-beekeeping-media-editor.component';
import { CmsBeekeepingSliderEditorComponent } from './pages/dialogs/cmsbeekeeping/slider/cms-beekeeping-slider-editor/cms-beekeeping-slider-editor.component';
import { CmsForestAboutEditorComponent } from './pages/dialogs/cmsforest/about/cms-forest-about-editor/cms-forest-about-editor.component';
import { CmsForestCardEditorComponent } from './pages/dialogs/cmsforest/card/cms-forest-card-editor/cms-forest-card-editor.component';
import { CmsForestMediaEditorComponent } from './pages/dialogs/cmsforest/media/cms-forest-media-editor/cms-forest-media-editor.component';
import { CmsForestSliderEditorComponent } from './pages/dialogs/cmsforest/slider/cms-forest-slider-editor/cms-forest-slider-editor.component';
import { CmsTourismAboutEditorComponent } from './pages/dialogs/cmstourism/about/cms-tourism-about-editor/cms-tourism-about-editor.component';
import { CmsTourismCardEditorComponent } from './pages/dialogs/cmstourism/card/cms-tourism-card-editor/cms-tourism-card-editor.component';
import { CmsTourismMediaEditorComponent } from './pages/dialogs/cmstourism/media/cms-tourism-media-editor/cms-tourism-media-editor.component';
import { CmsTourismSliderEditorComponent } from './pages/dialogs/cmstourism/slider/cms-tourism-slider-editor/cms-tourism-slider-editor.component';
import { CmsWildlifeAboutEditorComponent } from './pages/dialogs/cmswildlife/about/cms-wildlife-about-editor/cms-wildlife-about-editor.component';
import { CmsWildlifeCardEditorComponent } from './pages/dialogs/cmswildlife/card/cms-wildlife-card-editor/cms-wildlife-card-editor.component';
import { CmsWildlifeMediaEditorComponent } from './pages/dialogs/cmswildlife/media/cms-wildlife-media-editor/cms-wildlife-media-editor.component';
import { CmsWildlifeSliderEditorComponent } from './pages/dialogs/cmswildlife/slider/cms-wildlife-slider-editor/cms-wildlife-slider-editor.component';


@NgModule({
  declarations: [
   CmshomeComponent,
   CmsleadersComponent,
   CmsnewsComponent,
   DeleteLeaderComponent,
   UpdateLeaderComponent,
   AddLeaderComponent,
   ViewLeaderComponent,
   AddNewComponent,
   ViewNewComponent,
   UpdateNewComponent,
   DeleteNewComponent,
   CmsadvertisementsComponent,
   AddAdvertisementComponent,
   UpdateAdvertisementComponent,
   DeleteAdvertisementComponent,
   ViewAdvertisementComponent,
   CmsannouncementsComponent,
   ViewAnnouncementComponent,
   AddAnnouncementComponent,
   UpdateAnnouncementComponent,
   DeleteAnnouncementComponent,
   CmscontactsComponent,
   DeleteContactComponent,
   ViewContactComponent,
   AddContactComponent,
   UpdateContactComponent,
   CmsdepartmentsComponent,
   UpdateDepartmentComponent,
   AddDepartmentComponent,
   DeleteDepartmentComponent,
   ViewDepartmentComponent,
   CmsdirectorsComponent,
   ViewDirectorComponent,
   AddDirectorComponent,
   UpdateDirectorComponent,
   DeleteDirectorComponent,
   CmsdocumentsComponent,
   DeleteDocumentComponent,
   AddDocumentComponent,
   ViewDocumentComponent,
   UpdateDocumentComponent,
   CmsmanagementComponent,
   UpdateManagementComponent,
   DeleteManagementComponent,
   AddManagementComponent,
   ViewManagementComponent,
   CmsstakeholdersComponent,
   ViewStakeholderComponent,
   AddStakeholderComponent,
   UpdateStakeholderComponent,
   DeleteStakeholderComponent,
   CmsprojectsComponent,
   CmsprojectComponent,
   ViewProjectComponent,
   AddProjectComponent,
   UpdateProjectComponent,
   DeleteProjectComponent,
   CmstourismComponent,
   CmswildlifeComponent,
   CmsforestComponent,
   CmsantiquitiesComponent,
   CmsbeekeepingComponent,
   CmsTourismSliderAddComponent,
   CmsTourismSliderUpdateComponent,
   CmsTourismCardAddComponent,
   CmsTourismCardUpdateComponent,
   CmsTourismMediaUpdateComponent,
   CmsTourismMediaAddComponent,
   CmsTourismAboutAddComponent,
   CmsTourismAboutUpdateComponent,
   CmsForestAboutUpdateComponent,
   CmsForestAboutAddComponent,
   CmsForestCardAddComponent,
   CmsForestCardUpdateComponent,
   CmsForestMediaUpdateComponent,
   CmsForestMediaAddComponent,
   CmsForestSliderAddComponent,
   CmsForestSliderUpdateComponent,
   CmsBeekeeepingSliderUpdateComponent,
   CmsBeekeeepingSliderAddComponent,
   CmsBeekeeepingMediaAddComponent,
   CmsBeekeeepingMediaUpdateComponent,
   CmsBeekeeepingCardUpdateComponent,
   CmsBeekeeepingCardAddComponent,
   CmsBeekeeepingAboutAddComponent,
   CmsBeekeeepingAboutUpdateComponent,
   CmsAntiquitiesAboutUpdateComponent,
   CmsAntiquitiesAboutAddComponent,
   CmsAntiquitiesCardAddComponent,
   CmsAntiquitiesCardUpdateComponent,
   CmsAntiquitiesMediaUpdateComponent,
   CmsAntiquitiesMediaAddComponent,
   CmsAntiquitiesSliderAddComponent,
   CmsAntiquitiesSliderUpdateComponent,
   CmsWildlifeSliderUpdateComponent,
   CmsWildlifeSliderAddComponent,
   CmsWildlifeMediaAddComponent,
   CmsWildlifeMediaUpdateComponent,
   CmsWildlifeCardUpdateComponent,
   CmsWildlifeCardAddComponent,
   CmsWildlifeAboutAddComponent,
   CmsWildlifeAboutUpdateComponent,
   CmsBeekeepingCardEditorComponent,
   CmsBeekeepingAboutEditorComponent,
   CmsBeekeepingMediaEditorComponent,
   CmsBeekeepingSliderEditorComponent,
   CmsForestAboutEditorComponent,
   CmsForestCardEditorComponent,
   CmsForestMediaEditorComponent,
   CmsForestSliderEditorComponent,
   CmsTourismAboutEditorComponent,
   CmsTourismCardEditorComponent,
   CmsTourismMediaEditorComponent,
   CmsTourismSliderEditorComponent,
   CmsWildlifeAboutEditorComponent,
   CmsWildlifeCardEditorComponent,
   CmsWildlifeMediaEditorComponent,
   CmsWildlifeSliderEditorComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    CustomeMaterialsModule
  ]
})
export class CmsModule { }
