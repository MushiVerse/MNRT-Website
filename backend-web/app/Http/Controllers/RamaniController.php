<?php

namespace App\Http\Controllers;

use App\Models\Ramani;
use Illuminate\Http\Request;
use App\Http\Resources\RamaniResource;

class RamaniController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Ramani::all()->sortBy('id');
        return new RamaniResource($results);
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
        $ramani = new Ramani();
        $ramani->file_link = $request->file_link;
        $ramani->created_by = $request->created_by;
        $ramani->updated_by = $request->updated_by;
        $ramani->deleted_by = $request->deleted_by;
        $ramani->status = $request->status;
        $ramani->created_at = $request->created_at;
        $ramani->updated_at = $request->updated_at;
        $ramani->deleted_at = $request->deleted_at;
        if($ramani->save()){
            return new RamaniResource($ramani);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ramani  $ramani
     * @return \Illuminate\Http\Response
     */
    public function show(Ramani $ramani, $id)
    {
        $ramani = Leader::findOrFail($id);
        return new LeaderResource($ramani);  

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ramani  $ramani
     * @return \Illuminate\Http\Response
     */
    public function edit(Ramani $ramani)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ramani  $ramani
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ramani $ramani, $id)
    {
        $ramani = Ramani::findOrFail($id);
        $ramani->file_link = $request->file_link;
        $ramani->created_by = $request->created_by;
        $ramani->updated_by = $request->updated_by;
        $ramani->deleted_by = $request->deleted_by;
        $ramani->status = $request->status;
        $ramani->created_at = $request->created_at;
        $ramani->updated_at = $request->updated_at;
        $ramani->deleted_at = $request->deleted_at;
        if($ramani->save()){
            return new RamaniResource($ramani);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ramani  $ramani
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ramani $ramani,$id)
    {
        $ramani = Ramani::findOrFail($id);
        if($ramani->delete()){
            return new RamaniResource($ramani);
        }


    }
}
