<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tourism;
use App\Http\Resources\TourismResource;


class TourismController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Tourism::all()->sortByDesc('pub_date');
        return new TourismResource($results);
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
        $tourism = new Tourism();
        $tourism->image_slider = $request->image_slider;
        $tourism->image_slider_description =$request->image_slider_description;
        $tourism->media_title = $request->media_title;
        $tourism->media_description = $request->media_description;
        $tourism->media_link = $request->media_link;
        $tourism->media_video = $request->media_video;
        $tourism->card_link =  $request->card_link;
        $tourism->card_img = $request->card_img;
        $tourism->about_description = $request->about_description;
        $tourism->about_img = $request->about_img;
        $tourism->about_link = $request->about_link;
        $tourism->status = $request->status;
        $tourism->pub_date = $request->pub_date;
        $tourism->created_by = $request->created_by;
        $tourism->updated_by = $request->updated_by;
        $tourism->deleted_by = $request->deleted_by;
        $tourism->status = $request->status;
        $tourism->created_at = $request->created_at;
        $tourism->updated_at = $request->updated_at;
        $tourism->deleted_at = $request->deleted_at;
        if($tourism->save()){
            return new TourismResource($tourism);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tourism $tourism , $id)
    {
        $tourism = Tourism::findOrFail($id);
        return new ToursimResource($tourism);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Tourism $tourism, $id)
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
    public function update(Request $request, Tourism $tourism, $id)
    {
        $tourism = Tourism::findOrFail($id);
        $tourism->image_slider = $request->image_slider;
        $tourism->image_slider_description =$request->image_slider_description;
        $tourism->media_title = $request->media_title;
        $tourism->media_description = $request->media_description;
        $tourism->media_link = $request->media_link;
        $tourism->media_video = $request->media_video;
        $tourism->card_link =  $request->card_link;
        $tourism->card_img = $request->card_img;
        $tourism->about_description = $request->about_description;
        $tourism->about_img = $request->about_img;
        $tourism->about_link = $request->about_link;
        $tourism->status = $request->status;
        $tourism->pub_date = $request->pub_date;

        $tourism->created_by = $request->created_by;
        $tourism->updated_by = $request->updated_by;
        $tourism->deleted_by = $request->deleted_by;
        $tourism->status = $request->status;
        $tourism->created_at = $request->created_at;
        $tourism->updated_at = $request->updated_at;
        $tourism->deleted_at = $request->deleted_at;
        if($tourism->save()){
            return new TourismResource($tourism);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tourism $tourism, $id)
    {
        $tourism = Tourism::findOrFail($id);
        if($tourism->delete()){
            return new TourismResource($tourism);
        }
    }
//  get data through tourism about & card & media  & slider
    public function getTourismAboutData()
    {
            $results = Tourism::get(['about_description','about_img'])->sortByDesc('updated_at');
            return new TourismResource($results);
            }
     public function getTourismCardData()
     {
                $results = Tourism::get(['card_img','card_link'])->sortByDesc('updated_at');
                return new TourismResource($results);
     }

     public function getTourismMediaData()
     {
                $results = Tourism::get(['media_title','media_description','media_video'])->sortByDesc('updated_at');
                return new TourismResource($results);
     }

     public function getTourismSliderData()
     {
                $results = Tourism::get(['image_slider','image_slider_description'])->sortByDesc('updated_at');
                return new TourismResource($results);
     }
}
