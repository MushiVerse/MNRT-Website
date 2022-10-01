<?php

namespace App\Http\Controllers;

use App\Models\Tovuti;
use Illuminate\Http\Request;
use App\Http\Resources\TovutiResource;

class TovutiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Tovuti::all()->sortBy('id');
        return new TovutiResource($results);
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
        $tovuti = new Tovuti();
        $tovuti->link_url = $request->link_url;
        $tovuti->organization = $request->organization;
        $tovuti->created_by = $request->created_by;
        $tovuti->updated_by = $request->updated_by;
        $tovuti->deleted_by = $request->deleted_by;
        $tovuti->status = $request->status;
        $tovuti->created_at = $request->created_at;
        $tovuti->updated_at = $request->updated_at;
        $tovuti->deleted_at = $request->deleted_at;
        if($tovuti->save()){
            return new TovutiResource($tovuti);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tovuti  $tovuti
     * @return \Illuminate\Http\Response
     */
    public function show(Tovuti $tovuti, $id)
    {
        $tovuti = Tovuti::findOrFail($id);
        return new TovutiResource($tovuti);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tovuti  $tovuti
     * @return \Illuminate\Http\Response
     */
    public function edit(Tovuti $tovuti)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tovuti  $tovuti
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tovuti $tovuti, $id)
    {
        $tovuti = Tovuti::findOrFail($id);
        $tovuti->link_url = $request->link_url;
        $tovuti->organization = $request->organization;
        $tovuti->created_by = $request->created_by;
        $tovuti->updated_by = $request->updated_by;
        $tovuti->deleted_by = $request->deleted_by;
        $tovuti->status = $request->status;
        $tovuti->created_at = $request->created_at;
        $tovuti->updated_at = $request->updated_at;
        $tovuti->deleted_at = $request->deleted_at;
        if($tovuti->save()){
            return new TovutiResource($tovuti);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tovuti  $tovuti
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tovuti $tovuti, $id)
    {
        $tovuti = Tovuti::findOrFail($id);
        if($tovuti->delete()){
            return new TovutiResource($tovuti);
    }
}}
