<?php

namespace App\Http\Controllers;

use App\Models\Statistic;
use Illuminate\Http\Request;
use App\Http\Resources\StatisticResource;

class StatisticController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Statistic::all()->sortBy('id');
        return new StatisticResource($results);
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
        $statistic = new Statistic();
        $statistic->item_name = $request->item_name;
        $statistic->item_count = $request->item_count;
        $statistic->stat_source = $request->stat_source;
        $statistic->created_by = $request->created_by;
        $statistic->updated_by = $request->updated_by;
        $statistic->deleted_by = $request->deleted_by;
        $statistic->status = $request->status;
        $statistic->created_at = $request->created_at;
        $statistic->updated_at = $request->updated_at;
        $statistic->deleted_at = $request->deleted_at;
        if($statistic->save()){
            return new StatisticResource($statistic);   
    
    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function show(Statistic $statistic, $id)
    {
        $statistic = Statistic::findOrFail($id);
        return new StatisticResource($statistic); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function edit(Statistic $statistic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Statistic $statistic, $id)
    {
        $statistic = Statistic::findOrFail($id);
        $statistic->item_name = $request->item_name;
        $statistic->item_count = $request->item_count;
        $statistic->stat_source = $request->stat_source;
        $statistic->created_by = $request->created_by;
        $statistic->updated_by = $request->updated_by;
        $statistic->deleted_by = $request->deleted_by;
        $statistic->status = $request->status;
        $statistic->created_at = $request->created_at;
        $statistic->updated_at = $request->updated_at;
        $statistic->deleted_at = $request->deleted_at;
        if($statistic->save()){
            return new StatisticResource($statistic);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Statistic $statistic, $id)
    {
        $statistic = Statistic::findOrFail($id);
        if($statistic->delete()){
            return new StatisticResource($statistic);
        }
    }
}
