<?php

namespace App\Http\Controllers;

use App\Models\Tender;
use Illuminate\Http\Request;
use App\Http\Resources\TenderResource;


class TenderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Tender::all()->sortBy('id');
        return new TenderResource($results);
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
        $tender = new Tender();
        $tender->tender_number = $request->tender_number;
        $tender->tender_title = $request->tender_title;
        $tender->tender_des = $request->tender_des;
        $tender->open_date = $request->open_date;
        $tender->close_date = $request->close_date;
        $tender->attachment = $request->attachment;
        $tender->created_by = $request->created_by;
        $tender->updated_by = $request->updated_by;
        $tender->deleted_by = $request->deleted_by;
        $tender->status = $request->status;
        $tender->created_at = $request->created_at;
        $tender->updated_at = $request->updated_at;
        $tender->deleted_at = $request->deleted_at;
        if($tender->save()){
            return new TenderResource($tender);


    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tender  $tender
     * @return \Illuminate\Http\Response
     */
    public function show(Tender $tender, $id)
    {
        $tender = Tender::findOrFail($id);
        return new TenderResource($tender);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tender  $tender
     * @return \Illuminate\Http\Response
     */
    public function edit(Tender $tender)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tender  $tender
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tender $tender, $id)
    {
        $tender = Tender::findOrFail($id);
        $tender->tender_number = $request->tender_number;
        $tender->tender_title = $request->tender_title;
        $tender->tender_des = $request->tender_des;
        $tender->open_date = $request->open_date;
        $tender->close_date = $request->close_date;
        $tender->attachment = $request->attachment;
        $tender->created_by = $request->created_by;
        $tender->updated_by = $request->updated_by;
        $tender->deleted_by = $request->deleted_by;
        $tender->status = $request->status;
        $tender->created_at = $request->created_at;
        $tender->updated_at = $request->updated_at;
        $tender->deleted_at = $request->deleted_at;
        if($tender->save()){
            return new TenderResource($tender);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tender  $tender
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tender $tender, $id)
    {
        $tender = Tender::findOrFail($id);
        if($tender->delete()){
            return new TenderResource($tender);
        }
    }
}
