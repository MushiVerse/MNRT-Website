<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Forest;
use App\Http\Resources\ForestResource;

class ForestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Forest::all()->sortByDesc('pub_date');
        return new ForestResource($results);
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
        $forest = new Forest();
        $forest->image_slider = $request->image_slider;
        $forest->image_slider_description =$request->image_slider_description;
        $forest->media_title = $request->media_title;
        $forest->media_description = $request->media_description;
        $forest->media_link = $request->media_link;
        $forest->media_video = $request->media_video;
        $forest->card_link =  $request->card_link;
        $forest->card_img = $request->card_img;
        $forest->about_description = $request->about_description;
        $forest->about_img = $request->about_img;
        $forest->about_link = $request->about_link;
        $forest->status = $request->status;
        $forest->pub_date = $request->pub_date;
        $forest->created_by = $request->created_by;
        $forest->updated_by = $request->updated_by;
        $forest->deleted_by = $request->deleted_by;
        $forest->status = $request->status;
        $forest->created_at = $request->created_at;
        $forest->updated_at = $request->updated_at;
        $forest->deleted_at = $request->deleted_at;
        if($forest->save()){
            return new ForestResource($forest);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Forest $forest , $id)
    {
        $forest = Forest::findOrFail($id);
        return new ForestResource($forest);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Forest $forest, $id)
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
    public function update(Request $request, Forest $forest, $id)
    {
        $forest = Forest::findOrFail($id);
        $forest->image_slider = $request->image_slider;
        $forest->image_slider_description =$request->image_slider_description;
        $forest->media_title = $request->media_title;
        $forest->media_description = $request->media_description;
        $forest->media_link = $request->media_link;
        $forest->media_video = $request->media_video;
        $forest->card_link =  $request->card_link;
        $forest->card_img = $request->card_img;
        $forest->about_description = $request->about_description;
        $forest->about_img = $request->about_img;
        $forest->about_link = $request->about_link;
        $forest->status = $request->status;
        $forest->pub_date = $request->pub_date;

        $forest->created_by = $request->created_by;
        $forest->updated_by = $request->updated_by;
        $forest->deleted_by = $request->deleted_by;
        $forest->status = $request->status;
        $forest->created_at = $request->created_at;
        $forest->updated_at = $request->updated_at;
        $forest->deleted_at = $request->deleted_at;
        if($forest->save()){
            return new forestResource($forest);
    }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $forest = Forest::findOrFail($id);
        if($forest->delete()){
            return new ForestResource($forest);
        }
    }
}
