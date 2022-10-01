<?php

namespace App\Http\Controllers;

use App\Models\Wildlife;
use Illuminate\Http\Request;
use App\Http\Resources\WildlifeResource;


class WildlifeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $results = Wildlife::all()->sortByDesc('pub_date');
        return new WildlifeResource($results);
    }

    /**
     * 
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
        $wildlife = new Wildlife();
        $wildlife->image_slider = $request->image_slider;
        $wildlife->image_slider_description =$request->image_slider_description;
        $wildlife->media_title = $request->media_title;
        $wildlife->media_description = $request->media_description;
        $wildlife->media_link = $request->media_link;
        $wildlife->media_video = $request->media_video;
        $wildlife->card_link =  $request->card_link;
        $wildlife->card_img = $request->card_img;
        $wildlife->about_description = $request->about_description;
        $wildlife->about_img = $request->about_img;
        $wildlife->about_link = $request->about_link;
        $wildlife->status = $request->status;
        $wildlife->pub_date = $request->pub_date;
        $wildlife->created_by = $request->created_by;
        $wildlife->updated_by = $request->updated_by;
        $wildlife->deleted_by = $request->deleted_by;
        $wildlife->status = $request->status;
        $wildlife->created_at = $request->created_at;
        $wildlife->updated_at = $request->updated_at;
        $wildlife->deleted_at = $request->deleted_at;

        if($wildlife->save()){
            return new WildlifeResource($wildlife);
        }
}

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wildlife $wildlife
     * @return \Illuminate\Http\Response
     */
    public function show(Wildlife $wildlife, $id)
    {
        $wildlife = Wildlife::findOrfail($id);
        return new WildlifeResource($wildlife);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Wildlife  $wildlife
     * @return \Illuminate\Http\Response
     */
    public function edit(Wildlife $wildlife)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wildlife  $wildlife
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Wildlife $wildlife, $id)
    {
        $wildlife = Wildlife::findOrFail($id);
        $wildlife->image_slider = $request->image_slider;
        $wildlife->image_slider_description =$request->image_slider_description;
        $wildlife->media_title = $request->media_title;
        $wildlife->media_description = $request->media_description;
        $wildlife->media_link = $request->media_link;
        $wildlife->media_video = $request->media_video;
        $wildlife->card_link =  $request->card_link;
        $wildlife->card_img = $request->card_img;
        $wildlife->about_description = $request->about_description;
        $wildlife->about_img = $request->about_img;
        $wildlife->about_link = $request->about_link;
        $wildlife->status = $request->status;
        $wildlife->pub_date = $request->pub_date;

        $wildlife->created_by = $request->created_by;
        $wildlife->updated_by = $request->updated_by;
        $wildlife->deleted_by = $request->deleted_by;
        $wildlife->status = $request->status;
        $wildlife->created_at = $request->created_at;
        $wildlife->updated_at = $request->updated_at;
        $wildlife->deleted_at = $request->deleted_at;

        if($wildlife->save()){
            return new WildlifeResource($wildlife);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wildlife  $wildlife
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wildlife $wildlife,$id)
    {
        $wildlife = Wildlife::findOrFail($id);
        if($wildlife->delete()){
            return new WildlifeResource($wildlife);
        }
    }
}
