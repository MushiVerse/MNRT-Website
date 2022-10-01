<?php

namespace App\Http\Controllers;

use App\Models\Speech;
use Illuminate\Http\Request;
use App\Http\Resources\SpeechResource;

class SpeechController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Speech::all()->sortBy('id');
        return new SpeechResource($results);
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
        $speech = new Speech();
        $speech->speech_title = $request->speech_title;
        $speech->author = $request->author;
        $speech->location = $request->location;
        $speech->speech_date = $request->speech_date;
        $speech->text_link = $request->text_link;
        $speech->audio_link = $request->audio_link;
        $speech->video_link = $request->video_link;
        $speech->created_by = $request->created_by;
        $speech->updated_by = $request->updated_by;
        $speech->deleted_by = $request->deleted_by;
        $speech->status = $request->status;
        $speech->created_at = $request->created_at;
        $speech->updated_at = $request->updated_at;
        $speech->deleted_at = $request->deleted_at;
        if($speech->save()){
            return new SpeechResource($speech);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Speech  $speech
     * @return \Illuminate\Http\Response
     */
    public function show(Speech $speech, $id)
    {
        $speech = Speech::findOrFail($id);
        return new SpeechResource($speech);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Speech  $speech
     * @return \Illuminate\Http\Response
     */
    public function edit(Speech $speech)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Speech  $speech
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Speech $speech, $id)
    {
        $speech = Speech::findOrFail($id);
        $speech->speech_title = $request->speech_title;
        $speech->author = $request->author;
        $speech->location = $request->location;
        $speech->speech_date = $request->speech_date;
        $speech->text_link = $request->text_link;
        $speech->audio_link = $request->audio_link;
        $speech->video_link = $request->video_link;
        $speech->created_by = $request->created_by;
        $speech->updated_by = $request->updated_by;
        $speech->deleted_by = $request->deleted_by;
        $speech->status = $request->status;
        $speech->created_at = $request->created_at;
        $speech->updated_at = $request->updated_at;
        $speech->deleted_at = $request->deleted_at;
        if($speech->save()){
            return new SpeechResource($speech);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Speech  $speech
     * @return \Illuminate\Http\Response
     */
    public function destroy(Speech $speech, $id)
    {
        $speech = Speech::findOrFail($id);
        if($speech->delete()){
            return new SpeechResource($speech);
        }
    }
}
