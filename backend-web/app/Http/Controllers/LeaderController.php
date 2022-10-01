<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Resources\LeaderResource;
use App\Models\Leader;
// use App\Illuminate\;

class LeaderController extends Controller
{
    //Show current live data that are not yet deleted, they have null value on deleted_at

    public function index()
    {
        $results = Leader::all()->sortBy('id');
        return new LeaderResource($results);

    }

    //show all data that have been deleted, they have a deleted date on deleted_at column

    public function indexdel()
    {
        $results = Leader::withTrashed()->get();
        return new LeaderResource($results);
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
        $leader = new Leader();
        $leader->leader_name = $request->leader_name;
        $leader->leader_title = $request->leader_title;
        $leader->facebook_link = $request->facebook_link;
        $leader->instagram_link = $request->instagram_link;
        $leader->twitter_link = $request->twitter_link;
        $leader->start_date = $request->start_date;
        $leader->end_date = $request->end_date;
        $leader->picture = $request->picture;
        $leader->biography = $request->biography;
        $leader->created_by = $request->created_by;
        $leader->updated_by = $request->updated_by;
        $leader->deleted_by = $request->deleted_by;
        $leader->status = $request->status;
        $leader->created_at = $request->created_at;
        $leader->updated_at = $request->updated_at;
        $leader->deleted_at = $request->deleted_at;
        if($leader->save()){
            return new LeaderResource($leader);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Leader  $leader
     * @return \Illuminate\Http\Response
     */
    public function show(Leader $leader,$id)
    {
        $leader = Leader::findOrFail($id);
        return new LeaderResource($leader);  


    }


    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Leader  $leader
     * @return \Illuminate\Http\Response
     */
    public function edit(Leader $leader)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Leader  $leader
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Leader $leader,$id)
    {
        $leader = Leader::findOrFail($id);
        $leader->leader_name = $request->leader_name;
        $leader->leader_title = $request->leader_title;
        $leader->facebook_link = $request->facebook_link;
        $leader->instagram_link = $request->instagram_link;
        $leader->twitter_link = $request->twitter_link;
        $leader->start_date = $request->start_date;
        $leader->end_date = $request->end_date;
        $leader->picture = $request->picture;
        $leader->biography = $request->biography;
        $leader->created_by = $request->created_by;
        $leader->updated_by = $request->updated_by;
        $leader->deleted_by = $request->deleted_by;
        $leader->status = $request->status;
        $leader->created_at = $request->created_at;
        $leader->updated_at = $request->updated_at;
        $leader->deleted_at = $request->deleted_at;
        if($leader->save()){
            return new LeaderResource($leader);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Leader  $leader
     * @return \Illuminate\Http\Response
     */
    public function destroy(Leader $leader,$id)
    {
        $leader = Leader::findOrFail($id);
        if($leader->delete()){
            return new LeaderResource($leader);
        }

    }
}
