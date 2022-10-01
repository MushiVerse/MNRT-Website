<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ManagementResource;
use App\Models\Management;

class ManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Management::all()->sortBy('id');
        return new ManagementResource($results);
    }

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
        $management = new Management();
        $management->name = $request->name;
        $management->title = $request->title;
        $management->facebook_link = $request->facebook_link;
        $management->instagram_link = $request->instagram_link;
        $management->twitter_link = $request->twitter_link;
        $management->department = $request->department;
        $management->start_date = $request->start_date;
        $management->end_date = $request->end_date;
        $management->picture = $request->picture;
        $management->biography = $request->biography;
        $management->created_by = $request->created_by;
        $management->updated_by = $request->updated_by;
        $management->deleted_by = $request->deleted_by;
        $management->status = $request->status;
        $management->created_at = $request->created_at;
        $management->updated_at = $request->updated_at;
        $management->deleted_at = $request->deleted_at;
        if($management->save()){
            return new ManagementResource($management);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Management $management,$id)
    {
        $management = Management::findOrFail($id);
        return new ManagementResource($management); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Management $management,$id)
    {
        $management = Management::findOrFail($id);
        $management->name = $request->name;
        $management->title = $request->title;
        $management->facebook_link = $request->facebook_link;
        $management->instagram_link = $request->instagram_link;
        $management->twitter_link = $request->twitter_link;
        $management->department = $request->department;
        $management->start_date = $request->start_date;
        $management->end_date = $request->end_date;
        $management->picture = $request->picture;
        $management->biography = $request->biography;
        $management->created_by = $request->created_by;
        $management->updated_by = $request->updated_by;
        $management->deleted_by = $request->deleted_by;
        $management->status = $request->status;
        $management->created_at = $request->created_at;
        $management->updated_at = $request->updated_at;
        $management->deleted_at = $request->deleted_at;
        if($management->save()){
            return new ManagementResource($management);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Management $management, $id)
    {
        $management = Management::findOrFail($id);
        if($management->delete()){
            return new ManagementResource($management);
        }

    }
}
