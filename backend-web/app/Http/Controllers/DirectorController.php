<?php

namespace App\Http\Controllers;

use App\Models\Director;
use Illuminate\Http\Request;
use App\Http\Resources\DirectorResource;

class DirectorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Director::all()->sortBy('id');
        return new DirectorResource($results);   
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
        $director = new Director();
        $director->dir_name = $request->dir_name;
        $director->dir_title = $request->dir_title;
        $director->image_link = $request->image_link;
        $director->created_by = $request->created_by;
        $director->updated_by = $request->updated_by;
        $director->deleted_by = $request->deleted_by;
        $director->status = $request->status;
        $director->created_at = $request->created_at;
        $director->updated_at = $request->updated_at;
        $director->deleted_at = $request->deleted_at;
        if($director->save()){
            return new DirectorResource($director);

        }
        
        }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Director  $director
     * @return \Illuminate\Http\Response
     */
    public function show(Director $director, $id)
    {
        $director = Director::findOrFail($id);
        return new DirectorResource($director);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Director  $director
     * @return \Illuminate\Http\Response
     */
    public function edit(Director $director)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Director  $director
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Director $director, $id)
    {
        $director = Director::findOrFail($id);
        $director->dir_name = $request->dir_name;
        $director->dir_title = $request->dir_title;
        $director->image_link = $request->image_link;
        $director->created_by = $request->created_by;
        $director->updated_by = $request->updated_by;
        $director->deleted_by = $request->deleted_by;
        $director->status = $request->status;
        $director->created_at = $request->created_at;
        $director->updated_at = $request->updated_at;
        $director->deleted_at = $request->deleted_at;
        if($director->save()){
            return new DirectorResource($director);
    }
}
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Director  $director
     * @return \Illuminate\Http\Response
     */
    public function destroy(Director $director, $id)
    {
        $director = Director::findOrFail($id);
        if($director->delete()){
            return new DirectorResource($director);
        }
    }
}
