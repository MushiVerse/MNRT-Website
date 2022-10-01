<?php

namespace App\Http\Controllers;

use App\Models\Hifadhi;
use Illuminate\Http\Request;
use App\Http\Resources\HifadhiResource;

class HifadhiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Hifadhi::all()->sortBy('id');
        return new HifadhiResource($results);

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
        $hifadhi = new Hifadhi();
        $hifadhi->name = $request->name;
        $hifadhi->description = $request->description;
        $hifadhi->category = $request->category;
        $hifadhi->latitude = $request->latitude;
        $hifadhi->longitude = $request->longitude;
        $hifadhi->size = $request->size;
        $hifadhi->created_by = $request->created_by;
        $hifadhi->updated_by = $request->updated_by;
        $hifadhi->deleted_by = $request->deleted_by;
        $hifadhi->status = $request->status;
        $hifadhi->created_at = $request->created_at;
        $hifadhi->updated_at = $request->updated_at;
        $hifadhi->deleted_at = $request->deleted_at;
        if($hifadhi->save()){
            return new HifadhiResource($hifadhi);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Hifadhi  $hifadhi
     * @return \Illuminate\Http\Response
     */
    public function show(Hifadhi $hifadhi, $id)
    {
        $hifadhi = Hifadhi::findOrFail($id);
        return new HifadhiResource($hifadhi); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Hifadhi  $hifadhi
     * @return \Illuminate\Http\Response
     */
    public function edit(Hifadhi $hifadhi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Hifadhi  $hifadhi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hifadhi $hifadhi, $id)
    {
        $hifadhi = Hifadhi::findOrFail($id);
        $hifadhi->name = $request->name;
        $hifadhi->description = $request->description;
        $hifadhi->category = $request->category;
        $hifadhi->latitude = $request->latitude;
        $hifadhi->longitude = $request->longitude;
        $hifadhi->size = $request->size;
        $hifadhi->created_by = $request->created_by;
        $hifadhi->updated_by = $request->updated_by;
        $hifadhi->deleted_by = $request->deleted_by;
        $hifadhi->status = $request->status;
        $hifadhi->created_at = $request->created_at;
        $hifadhi->updated_at = $request->updated_at;
        $hifadhi->deleted_at = $request->deleted_at;
        if($hifadhi->save()){
            return new HifadhiResource($hifadhi);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Hifadhi  $hifadhi
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hifadhi $hifadhi, $id)
    {
        $hifadhi = Hifadhi::findOrFail($id);
        if($hifadhi->delete()){
            return new HifadhiResource($hifadhi);
        }

    }
}
