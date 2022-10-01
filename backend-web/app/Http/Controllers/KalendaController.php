<?php

namespace App\Http\Controllers;

use App\Models\Kalenda;
use Illuminate\Http\Request;
use App\Http\Resources\KalendaResource;

class KalendaController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Kalenda::all()->sortBy('id');
        return new KalendaResource($results);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $kalenda = new Kalenda();
        $kalenda->event_name = $request->event_name;
        $kalenda->event_des = $request->event_des;
        $kalenda->location = $request->location;
        $kalenda->event_date = $request->event_date;
        $kalenda->end_date = $request->end_date;
        $kalenda->participants = $request->participants;
        $kalenda->guest_of_honor = $request->guest_of_honor;
        $kalenda->created_by = $request->created_by;
        $kalenda->updated_by = $request->updated_by;
        $kalenda->deleted_by = $request->deleted_by;
        $kalenda->status = $request->status;
        $kalenda->created_at = $request->created_at;
        $kalenda->updated_at = $request->updated_at;
        $kalenda->deleted_at = $request->deleted_at;
        if($kalenda->save()){
            return new KalendaResource($kalenda);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kalenda  $kalenda
     * @return \Illuminate\Http\Response
     */
    public function show(Kalenda $kalenda, $id)
    {
        $kalenda = Kalenda::findOrFail($id);
        return new KalendaResource($kalenda);  

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kalenda  $kalenda
     * @return \Illuminate\Http\Response
     */
    public function edit(Kalenda $kalenda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kalenda  $kalenda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kalenda $kalenda, $id)
    {
        $kalenda = Kalenda::findOrFail();
        $kalenda->event_name = $request->event_name;
        $kalenda->event_des = $request->event_des;
        $kalenda->location = $request->location;
        $kalenda->event_date = $request->event_date;
        $kalenda->end_date = $request->end_date;
        $kalenda->participants = $request->participants;
        $kalenda->guest_of_honor = $request->guest_of_honor;
        $kalenda->created_by = $request->created_by;
        $kalenda->updated_by = $request->updated_by;
        $kalenda->deleted_by = $request->deleted_by;
        $kalenda->status = $request->status;
        $kalenda->created_at = $request->created_at;
        $kalenda->updated_at = $request->updated_at;
        $kalenda->deleted_at = $request->deleted_at;
        if($kalenda->save()){
            return new KalendaResource($kalenda);
        }}

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kalenda  $kalenda
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kalenda $kalenda, $id)
    {
        $kalenda = Kalenda::findOrFail($id);
        if($kalenda->delete()){
            return new KalendaResource($kalenda);
        }
    }
}
