<?php

namespace App\Http\Controllers;

use App\Models\Mifumo;
use Illuminate\Http\Request;
use App\Http\Resources\MifumoResource;


class MifumoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Mifumo::all()->sortBy('id');
        return new MifumoResource($results);

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
        $mifumo = new Mifumo();
        $mifumo->system_name = $request->system_name;
        $mifumo->system_link = $request->system_link;
        $mifumo->system_des = $request->system_des;
        $mifumo->created_by = $request->created_by;
        $mifumo->updated_by = $request->updated_by;
        $mifumo->deleted_by = $request->deleted_by;
        $mifumo->status = $request->status;
        $mifumo->created_at = $request->created_at;
        $mifumo->updated_at = $request->updated_at;
        $mifumo->deleted_at = $request->deleted_at;
        if($mifumo->save()){
            return new MifumoResource($mifumo);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mifumo  $mifumo
     * @return \Illuminate\Http\Response
     */
    public function show(Mifumo $mifumo,$id)
    {
        $mifumo = Mifumo::findOrFail($id);
        return new MifumoResource($mifumo);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Mifumo  $mifumo
     * @return \Illuminate\Http\Response
     */
    public function edit(Mifumo $mifumo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Mifumo  $mifumo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mifumo $mifumo,$id)
    {
        $mifumo = Mifumo::findOrFail($id);
        $mifumo->system_name = $request->system_name;
        $mifumo->system_link = $request->system_link;
        $mifumo->system_des = $request->system_des;
        $mifumo->created_by = $request->created_by;
        $mifumo->updated_by = $request->updated_by;
        $mifumo->deleted_by = $request->deleted_by;
        $mifumo->status = $request->status;
        $mifumo->created_at = $request->created_at;
        $mifumo->updated_at = $request->updated_at;
        $mifumo->deleted_at = $request->deleted_at;
        if($mifumo->save()){
            return new MifumoResource($mifumo);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mifumo  $mifumo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mifumo $mifumo, $id)
    {
        $mifumo = Mifumo::findOrFail($id);
        if($mifumo->delete()){
            return new MifumoResource($mifumo);
        }

    }
}
