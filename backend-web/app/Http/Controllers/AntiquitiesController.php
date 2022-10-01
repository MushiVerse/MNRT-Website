<?php

namespace App\Http\Controllers;

use App\Models\Antiquities;
use Illuminate\Http\Request;
use App\Http\Resources\AntiquitiesResource;


class AntiquitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $results = Antiquities::all()->sortByDesc('pub_date');
        return new AntiquitiesResource($results);
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
        $antiquities = new Antiquities();
        $antiquities->image_slider = $request->image_slider;
        $antiquities->image_slider_description =$request->image_slider_description;
        $antiquities->media_title = $request->media_title;
        $antiquities->media_description = $request->media_description;
        $antiquities->media_link = $request->media_link;
        $antiquities->media_video = $request->media_video;
        $antiquities->card_link =  $request->card_link;
        $antiquities->card_img = $request->card_img;
        $antiquities->about_description = $request->about_description;
        $antiquities->about_img = $request->about_img;
        $antiquities->about_link = $request->about_link;
        $antiquities->status = $request->status;
        $antiquities->pub_date = $request->pub_date;
        $antiquities->created_by = $request->created_by;
        $antiquities->updated_by = $request->updated_by;
        $antiquities->deleted_by = $request->deleted_by;
        $antiquities->status = $request->status;
        $antiquities->created_at = $request->created_at;
        $antiquities->updated_at = $request->updated_at;
        $antiquities->deleted_at = $request->deleted_at;
        if($antiquities->save()){
            return new AntiquitiesResource($antiquities);
       }
    }
   /**
     * Display the specified resource.
     *
     * @param  \App\Models\Antiquities $antiquities
     * @return \Illuminate\Http\Response
     */
    public function show(Antiquities $antiquities, $id)
    {
        $wildlife = Antiquities::findOrfail($id);
        return new AntiquitiesResource($antiquities);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Antiquities  $antiquities
     * @return \Illuminate\Http\Response
     */
    public function edit(Antiquities $antiquities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Antiquities  $antiquities
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Antiquities $antiquities, $id)
    {
        $antiquities = Antiquities::findOrFail($id);
        $antiquities->image_slider = $request->image_slider;
        $antiquities->image_slider_description =$request->image_slider_description;
        $antiquities->media_title = $request->media_title;
        $antiquities->media_description = $request->media_description;
        $antiquities->media_link = $request->media_link;
        $antiquities->media_video = $request->media_video;
        $antiquities->card_link =  $request->card_link;
        $antiquities->card_img = $request->card_img;
        $antiquities->about_description = $request->about_description;
        $antiquities->about_img = $request->about_img;
        $antiquities->about_link = $request->about_link;
        $antiquities->status = $request->status;
        $antiquities->pub_date = $request->pub_date;

        $antiquities->created_by = $request->created_by;
        $antiquities->updated_by = $request->updated_by;
        $antiquities->deleted_by = $request->deleted_by;
        $antiquities->status = $request->status;
        $antiquities->created_at = $request->created_at;
        $antiquities->updated_at = $request->updated_at;
        $antiquities->deleted_at = $request->deleted_at;
        if($antiquities->save()){
            return new AntiquitiesResource($antiquities);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Antiquities  $antiquities
     * @return \Illuminate\Http\Response
     */
    public function destroy(Antiquities $antiquities,$id)
    {
        $antiquities = Antiquities::findOrFail($id);
        if($antiquities->delete()){
            return new AntiquitiesResource($antiquities);
        }
    }
}
