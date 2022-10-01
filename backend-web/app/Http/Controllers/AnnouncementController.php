<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use App\Http\Resources\AnnouncementResource;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        {
            $results = Announcement::all()->sortBy('id');
            return new AnnouncementResource($results);    
        }    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $announcement = new Announcement();
        $announcement->ann_title = $request->ann_title;
        $announcement->ann_des = $request->ann_des;
        $announcement->attachment = $request->attachment;
        $announcement->created_by = $request->created_by;
        $announcement->updated_by = $request->updated_by;
        $announcement->deleted_by = $request->deleted_by;
        $announcement->status = $request->status;
        $announcement->created_at = $request->created_at;
        $announcement->updated_at = $request->updated_at;
        $announcement->deleted_at = $request->deleted_at;
        if($announcement->save()){
            return new AnnouncementResource($announcement);

    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function show(Announcement $announcement, $id)
    {
        $announcement = Announcement::findOrFail($id);
        return new AnnouncementResource($announcement);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function edit(Announcement $announcement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Announcement $announcement, $id)
    {
        $announcement = Announcement::findOrFail($id);
        $announcement->ann_title = $request->ann_title;
        $announcement->ann_des = $request->ann_des;
        $announcement->attachment = $request->attachment;
        $announcement->created_by = $request->created_by;
        $announcement->updated_by = $request->updated_by;
        $announcement->deleted_by = $request->deleted_by;
        $announcement->status = $request->status;
        $announcement->created_at = $request->created_at;
        $announcement->updated_at = $request->updated_at;
        $announcement->deleted_at = $request->deleted_at;
        if($announcement->save()){
            return new AnnouncementResource($announcement);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Announcement  $announcement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Announcement $announcement, $id)
    {
        $announcement = Announcement::findOrFail($id);
        if($announcement->delete()){
            return new AnnouncementResource($announcement);
        }
    }
}
