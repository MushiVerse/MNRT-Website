<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use App\Http\Resources\GalleryResource;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Gallery::all()->sortBy('id');
        return new GalleryResource($results);
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
        $gallery = new Gallery();
        $gallery->media_title = $request->media_title;
        $gallery->media_category = $request->media_category;
        $gallery->media_des = $request->media_des;
        $gallery->media_link = $request->media_link;
        $gallery->created_by = $request->created_by;
        $gallery->updated_by = $request->updated_by;
        $gallery->deleted_by = $request->deleted_by;
        $gallery->status = $request->status;
        $gallery->created_at = $request->created_at;
        $gallery->updated_at = $request->updated_at;
        $gallery->deleted_at = $request->deleted_at;
        if ($request->hasFile('media_link')){
            $completeFileName = $request->file('media_link')->getClientOriginalName();
            $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
            $extenshion = $request->file('media_link')->getClientOriginalExtension();
            $compPic = str_replace('', '_', $fileNameOnly).'_'.rand() .'_'.time() .'.'.$extenshion;
            $path = $request->file('media_link')->storeAs('public/gallery', $compPic);
  
            $gallery->media_link = $compPic;
        }
        if($gallery->save()){
            return ['message'=>'Post save successfully'];
        }else{
          return ['message'=>'Something Went Wrong'];
  
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show(Gallery $gallery, $id)
    {
        $gallery = Gallery::findOrFail($id);
        return new GalleryResource($gallery);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gallery $gallery, $id)
    {
        $gallery = Gallery::findOrFail($id);
        $gallery->media_title = $request->media_title;
        $gallery->media_category = $request->media_category;
        $gallery->media_des = $request->media_des;
        $gallery->media_link = $request->media_link;
        $gallery->created_by = $request->created_by;
        $gallery->updated_by = $request->updated_by;
        $gallery->deleted_by = $request->deleted_by;
        $gallery->status = $request->status;
        $gallery->created_at = $request->created_at;
        $gallery->updated_at = $request->updated_at;
        $gallery->deleted_at = $request->deleted_at;
        if($gallery->save()){
            return new GalleryResource($gallery);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        $gallery = Gallery::findOrFail($id);
        if($gallery->delete()){
            return new GalleryResource($gallery);
        }
    }
}
