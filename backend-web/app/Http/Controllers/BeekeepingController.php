<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Beekeeping;
use App\Http\Resources\BeekeepingResource;

class BeekeepingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Beekeeping::all()->sortByDesc('pub_date');
        return new BeekeepingResource($results);
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
        $beekeeping = new Beekeeping();
        $beekeeping->image_slider = $request->image_slider;
        $beekeeping->image_slider_description =$request->image_slider_description;
        $beekeeping->media_title = $request->media_title;
        $beekeeping->media_description = $request->media_description;
        $beekeeping->media_link = $request->media_link;
        $beekeeping->media_video = $request->media_video;
        $beekeeping->card_link =  $request->card_link;
        $beekeeping->card_img = $request->card_img;
        $beekeeping->about_description = $request->about_description;
        $beekeeping->about_img = $request->about_img;
        $beekeeping->about_link = $request->about_link;
        $beekeeping->status = $request->status;
        $beekeeping->pub_date = $request->pub_date;
        $beekeeping->created_by = $request->created_by;
        $beekeeping->updated_by = $request->updated_by;
        $beekeeping->deleted_by = $request->deleted_by;
        $beekeeping->status = $request->status;
        $beekeeping->created_at = $request->created_at;
        $beekeeping->updated_at = $request->updated_at;
        $beekeeping->deleted_at = $request->deleted_at;
        if($beekeeping->save()){
            return new BeekeepingResource($beekeeping);

        }
    }
    
    public function show(Beekeeping $forest , $id)
    {
        $beekeeping = Beekeeping::findOrFail($id);
        return new BeekeepingResources($forest);
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
    public function update(Request $request, Beekeeping $beekeeping, $id)
    {
        $beekeeping = Beekeeping::findOrFail($id);
        $beekeeping->image_slider = $request->image_slider;
        $beekeeping->image_slider_description =$request->image_slider_description;
        $beekeeping->media_title = $request->media_title;
        $beekeeping->media_description = $request->media_description;
        $beekeeping->media_link = $request->media_link;
        $beekeeping->media_video = $request->media_video;
        $beekeeping->card_link =  $request->card_link;
        $beekeeping->card_img = $request->card_img;
        $beekeeping->about_description = $request->about_description;
        $beekeeping->about_img = $request->about_img;
        $beekeeping->about_link = $request->about_link;
        $beekeeping->status = $request->status;
        $beekeeping->pub_date = $request->pub_date;

        $beekeeping->created_by = $request->created_by;
        $beekeeping->updated_by = $request->updated_by;
        $beekeeping->deleted_by = $request->deleted_by;
        $beekeeping->status = $request->status;
        $beekeeping->created_at = $request->created_at;
        $beekeeping->updated_at = $request->updated_at;
        $beekeeping->deleted_at = $request->deleted_at;
        if($beekeeping->save()){
            return new BeekeepingResource($beekeeping);
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
        $beekeeping = Beekeeping::findOrFail($id);
        if($beekeeping->delete()){
            return new BeekeepingResource($beekeeping);
        }
    }
}
