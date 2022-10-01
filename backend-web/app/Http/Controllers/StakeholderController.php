<?php

namespace App\Http\Controllers;

use App\Models\Stakeholder;
use Illuminate\Http\Request;
use App\Http\Resources\StakeholderResource;

class StakeholderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Stakeholder::all()->sortBy('id');
        return new StakeholderResource($results);
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
        $stakeholder = new Stakeholder();
        $stakeholder->category = $request->category;
        $stakeholder->sthdr_name = $request->sthdr_name;
        $stakeholder->phone = $request->phone;
        $stakeholder->email = $request->email;
        $stakeholder->postal_address = $request->postal_address;
        $stakeholder->physical_address = $request->physical_address;
        $stakeholder->country = $request->country;
        $stakeholder->website = $request->website;
        $stakeholder->licence_status = $request->licence_status;
        $stakeholder->created_by = $request->created_by;
        $stakeholder->updated_by = $request->updated_by;
        $stakeholder->deleted_by = $request->deleted_by;
        $stakeholder->status = $request->status;
        $stakeholder->created_at = $request->created_at;
        $stakeholder->updated_at = $request->updated_at;
        $stakeholder->deleted_at = $request->deleted_at;
        if($stakeholder->save()){
            return new StakeholderResource($stakeholder);

    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Stakeholder  $stakeholder
     * @return \Illuminate\Http\Response
     */
    public function show(Stakeholder $stakeholder, $id)
    {
        $stakeholder = Stakeholder::findOrFail($id);
        return new StakeholderResource($stakeholder);
    }

    public function touroperator(Request $request, Stakeholder $stakeholder)
    {
        $query = Stakeholder::all()->where('category', '=', 'Tour Operators');
        return new StakeholderResource($query);

    }

    public function hunting(Request $request, Stakeholder $stakeholder)
    {
        $query = Stakeholder::all()->where('category', '=', 'Hunting Companies');
        return new StakeholderResource($query);

    }

    public function researches(Request $request, Stakeholder $stakeholder)
    {
        $query = Stakeholder::all()->where('category', '=', 'Licensed Researches');
        return new StakeholderResource($query);

    }

    public function trophy(Request $request, Stakeholder $stakeholder)
    {
        $query = Stakeholder::all()->where('category', '=', 'Trophy Dealers');
        return new StakeholderResource($query);

    }

    public function forest(Request $request, Stakeholder $stakeholder)
    {
        $query = Stakeholder::all()->where('category', '=', 'Forest Products Exporters');
        return new StakeholderResource($query);

    }



    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Stakeholder  $stakeholder
     * @return \Illuminate\Http\Response
     */
    public function edit(Stakeholder $stakeholder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Stakeholder  $stakeholder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Stakeholder $stakeholder, $id)
    {
        $stakeholder = Stakeholder::findOrFail($id);
        $stakeholder->category = $request->category;
        $stakeholder->sthdr_name = $request->sthdr_name;
        $stakeholder->phone = $request->phone;
        $stakeholder->email = $request->email;
        $stakeholder->postal_address = $request->postal_address;
        $stakeholder->physical_address = $request->physical_address;
        $stakeholder->country = $request->country;
        $stakeholder->website = $request->website;
        $stakeholder->licence_status = $request->licence_status;
        $stakeholder->created_by = $request->created_by;
        $stakeholder->updated_by = $request->updated_by;
        $stakeholder->deleted_by = $request->deleted_by;
        $stakeholder->status = $request->status;
        $stakeholder->created_at = $request->created_at;
        $stakeholder->updated_at = $request->updated_at;
        $stakeholder->deleted_at = $request->deleted_at;
        if($stakeholder->save()){
            return new StakeholderResource($stakeholder);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Stakeholder  $stakeholder
     * @return \Illuminate\Http\Response
     */
    public function destroy(Stakeholder $stakeholder, $id)
    {
        $stakeholder = Stakeholder::findOrFail($id);
        if($stakeholder->delete()){
            return new StakeholderResource($stakeholder);
        }
    }
}
