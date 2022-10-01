<?php

namespace App\Http\Controllers;

use App\Models\Mitandao;
use Illuminate\Http\Request;
use App\Http\Resources\MitandaoResource;

class MitandaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Mitandao::all()->sortBy('id');
        return new MitandaoResource($results);
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
        $mitandao = new Mitandao();
        $mitandao->socmed_name = $request->socmed_name;
        $mitandao->socmed_url = $request->socmed_url;
        $mitandao->created_by = $request->created_by;
        $mitandao->updated_by = $request->updated_by;
        $mitandao->deleted_by = $request->deleted_by;
        $mitandao->status = $request->status;
        $mitandao->created_at = $request->created_at;
        $mitandao->updated_at = $request->updated_at;
        $mitandao->deleted_at = $request->deleted_at;
        if($mitandao->save()){
            return new MitandaoResource($mitandao);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mitandao  $mitandao
     * @return \Illuminate\Http\Response
     */
    public function show(Mitandao $mitandao, $id)
    {
        $mitandao = Mitandao::findOrFail($id);
        return new MitandaoResource($mitandao);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Mitandao  $mitandao
     * @return \Illuminate\Http\Response
     */
    public function edit(Mitandao $mitandao)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Mitandao  $mitandao
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mitandao $mitandao, $id)
    {
        $mitandao = Mitandao::findOrFail($id);
        $mitandao->socmed_name = $request->socmed_name;
        $mitandao->socmed_url = $request->socmed_url;
        $mitandao->created_by = $request->created_by;
        $mitandao->updated_by = $request->updated_by;
        $mitandao->deleted_by = $request->deleted_by;
        $mitandao->status = $request->status;
        $mitandao->created_at = $request->created_at;
        $mitandao->updated_at = $request->updated_at;
        $mitandao->deleted_at = $request->deleted_at;
        if($mitandao->save()){
            return new MitandaoResource($mitandao);
        }
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mitandao  $mitandao
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mitandao $mitandao, $id)
    {
        $mitandao = Mitandao::findOrFail($id);
        if($mitandao->delete()){
            return new MitandaoResource($mitandao);
        }
    }
}
